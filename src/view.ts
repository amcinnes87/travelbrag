/// <reference path="./data/all.ts" />
/// <referene path="./model.ts" />
/// <reference path="./viewmodel.ts" />
/// <reference path="./leaflet.d.ts" />

module view {

	function initMap(mapElement: HTMLElement) {
		var map = L.map(mapElement, {zoomControl: false, maxZoom: 15}).fitWorld();
		L.control.zoom({position: 'bottomright'}).addTo(map);
		L.tileLayer(
            "https://otile{s}-s.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}",
			{
                type: "sat",
                ext: "jpg",
                subdomains: ['1', '2', '3', '4'],
				attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; ' +
							'Portions Courtesy NASA/JPL-Caltech and U.S. Dept. of Agriculture, Farm Service Agency'
            }).addTo(map);
        L.tileLayer(
            "https://otile{s}-s.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}",
			{
                type: "hyb",
                ext: "png",
                subdomains: ['1', '2', '3', '4'],
                opacity: 0.9
            }).addTo(map);

		return map;
	}

	class ColouredTraveller {
		names: {[id: string]: boolean} = {};  // I miss sets.
		colour: string;

		constructor(travellers: model.Traveller) {
			this.colour = travellers.colour;
			console.log(travellers.names);
			for (let name of travellers.names) {
				this.names[name] = true;
			}
		}

		matches(names: string[]): boolean {
			for (let looking_for of names) {
				if (!this.names[looking_for]) {
					return false;
				}
			}

			return true;
		}
	}

	class ColouredTravellers {
		travellers: ColouredTraveller[] = [];
		defaultColour = "#ffffff";

		constructor(travellers: model.Traveller[]) {
			for (let traveller of travellers) {
				this.travellers.push(new ColouredTraveller(traveller));
			}
		}

		findColour(names: string[]): string {
			// Technically a tree of names would be the most optimal, but there
			// shouldn't be that many entries to warrant that level of
			// complexity.
			for (let traveller of this.travellers) {
				if (traveller.matches(names)) {
					return traveller.colour;
				}
			}

			return this.defaultColour;
		}
	}

	/**
	 * Create a string representation of when a city was last visited.
	 *
	 * If a city was last visited was a different calendar year then only
	 * return the year, else return the month and year.
	 */
	function lastVisited(date: string): string {
		let today = new Date();
		let dateParts = date.split("-");
		let visitedYear = parseInt(dateParts[0], 10);
		if (today.getUTCFullYear() > visitedYear || dateParts.length == 1) {
			return dateParts[0];
		}
		let visitedMonth = parseInt(dateParts[1], 10);
		let visitedDate = new Date(visitedYear, visitedMonth-1);
		return visitedDate.toLocaleString(
				"en-US",
				{timeZone: "UTC", year: "numeric", month: "short"}
		);
	}

	// SVG path taken from https://github.com/hiasinho/Leaflet.vector-markers .
	let svg = '<svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="32" height="52">' +
                  '<mask id="pinhole">' +
                    '<rect width="100%" height="100%" fill="white" />' +
                    '<circle cx="16" cy="16" r="5" />' +
                  '</mask>' +
			      '<path d="M16 1C7.715 1 1 7.656 1 15.865 1 24.075 16 51 16 51s15-26.924 15-35.135C31 7.655 24.282 1 16 1z" ' +
			  	        'fill="{colour}" fill-opacity="0.4" mask="url(#pinhole)" />' +
                  '<circle cx="16" cy="16" r="5" fill="none" stroke-width="1" stroke="black" />' +
			      //'<circle cx="16" cy="16" r="5" fill="#fff" stroke="#000"/>' +
			  '</svg>';

	let iconCache: {[id: string]: L.Icon} = {};

	function createPin(colour: string): L.Icon {
		if (!iconCache[colour]) {
			let divIcon = L.divIcon({
					iconSize: L.point(32, 52),
					iconAnchor: L.point(16, 51),
					popupAnchor: L.point(0, -35),
					className: "vector-marker",
					html: svg.replace("{colour}", colour)
			});
			iconCache[colour] = divIcon;
		}
		return iconCache[colour];
	}

	function createMarker(latLng: L.LatLng, name: string, colour: string,
			lastVisitedDate: string): L.Marker {
		let icon = createPin(colour);
		let marker = L.marker(latLng, {icon: icon});
		let popup = "<b>" + name + "</b>";
		popup += "<br><i><small>Last visited in " + lastVisited(lastVisitedDate) +
				 "</i></small>";
		// XXX Link to photos.
		marker.bindPopup(popup);

		return marker;
	}

	function citiesToPins(travellers: model.Traveller[], cities: viewmodel.City[]):
			L.FeatureGroup<L.ILayer> {
		let colouredTravellers = new ColouredTravellers(travellers);
		let pinGroup = L.featureGroup();
		for (let city of cities) {
			let colour = colouredTravellers.findColour(city.travellers);
			let latLng = L.latLng(city.lat, city.lng);
			let name = [city.name, city.country].join(", ");
			let lastVisited = city.lastVisited;
			pinGroup.addLayer(createMarker(latLng, name, colour, lastVisited));
		}

		return pinGroup;
	}

    let shift = 5;

	/**
	 * Add a feature group to the map with a lat/lng padding on the
	 * bounds to help make sure that all pins are fully visible.
	 */
	function addPinsToMap(pinGroup: L.FeatureGroup<L.ILayer>, map: L.Map) {
		pinGroup.addTo(map);

		let bounds = pinGroup.getBounds();
		let south = bounds.getSouth();
		let west = bounds.getWest();
		let north = bounds.getNorth();
		let east = bounds.getEast();
        north += shift;
        east += shift;
		let southwest = L.latLng(south, west);
		let northeast = L.latLng(north, east);
		map.fitBounds(L.latLngBounds(southwest, northeast));
	}

	export function onLoad(mapElement: HTMLElement) {
		let details = data.getDetails();
		let map = initMap(mapElement);
		let cities = viewmodel.tripsToCities(details.cities, details.trips);
		let pinGroup = citiesToPins(details.travellers, cities);
		addPinsToMap(pinGroup, map);
		return details.name;
	}

}