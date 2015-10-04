/// <reference path="./model.ts" />

module viewmodel {

	export interface City extends model.City {
		travellers: string[];
		lastVisited: string;  // ISO 8601.
	}

	var copyCity = (allCities: model.CityMap, trip: model.Trip,
						tripCity: model.VisitedCity): City => {
		let cityDetails = allCities[tripCity.key];
		if (!cityDetails) {
			console.log(tripCity.key + " is not a valid city key");
			return null;
		}
		return {
			name: cityDetails.name,
			country: cityDetails.country,
			lat: cityDetails.lat,
			lng: cityDetails.lng,
			travellers: trip.travellers.slice(),
			lastVisited: tripCity.left
		};
	}

	function updateTravellers(city: City, trip: model.Trip): void {
		let seen = city.travellers;
		for (let traveller of trip.travellers) {
			if (seen.indexOf(traveller) < 0) {
				seen.push(traveller);
			}
		}
	}

	function updateLastVisited(city: City, tripCity: model.VisitedCity): void {
		// This comparison only works if proper zero padding is used in date
		// strings.
		if (city.lastVisited < tripCity.left) {
			city.lastVisited = tripCity.left;
		}
	}

	export function tripsToCities(allCities: model.CityMap, trips: model.Trip[]): City[] {
		let visitedCities: City[] = [];
		let citiesIndex: {[key: string]: number} = {};
		for (let trip of trips) {
			for (let tripCity of trip.cities) {
				let cityIndex = citiesIndex[tripCity.key];
				if (cityIndex == undefined) {
					citiesIndex[tripCity.key] = visitedCities.length;
					visitedCities.push(copyCity(allCities, trip, tripCity));
				} else {
					let visitedCity = visitedCities[cityIndex];
					updateTravellers(visitedCity, trip);
					updateLastVisited(visitedCity, tripCity);
				}
			}
		}

		return visitedCities;
	}
}