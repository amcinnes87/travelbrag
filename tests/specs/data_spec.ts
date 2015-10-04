/// <reference path="jasmine.d.ts" />
/// <reference path="../../src/model.ts" />
/// <reference path="../../src/data/all.ts" />

describe("Trip data", () => {

	function isISO8601(date: string) {
		let dateParts = date.split("-");
		expect(dateParts.length).toBeGreaterThan(0);
		expect(dateParts.length).toBeLessThan(4);
		// YYYY
		expect(dateParts[0].length).toEqual(4);
		let year = parseInt(dateParts[0], 10);
		expect(year).toBeGreaterThan(0);
		expect(year).toBeLessThan(new Date().getUTCFullYear() + 1);
		if (dateParts.length > 1) {
			// YYYY-MM
			expect(dateParts[1].length).toEqual(2);
			let month = parseInt(dateParts[1], 10);
			expect(month).toBeGreaterThan(0);
			expect(month).toBeLessThan(13);
			if (dateParts.length == 3) {
				// YYYY-MM-DD
				expect(dateParts[2].length).toEqual(2);
				let day = parseInt(dateParts[2], 10);
				expect(day).toBeGreaterThan(0);
				expect(day).toBeLessThan(32);
			}
		}
	}

	it("has traveller colour in hexidecimal format", () => {
		let details = data.getDetails();
		for (let traveller of details.travellers) {
			expect(traveller.colour).toMatch(/#[0-9A-Fa-f]{6}/);
		}
	});

	it("has all travellers an assigned colour", () => {
		let details = data.getDetails();
		let travellerNames: {[id: string]: boolean} = {};
		for (let trip of details.trips) {
			for (let name of trip.travellers) {
				travellerNames[name] = true;
			}
		}

		for (let traveller of details.travellers) {
			if (traveller.names.length == 1) {
				delete travellerNames[traveller.names[0]];
			}
		}

		expect(Object.keys(travellerNames).length).toEqual(0);
	});

	it("has legal latitude and longitude values", () => {
		let details = data.getDetails();
		for (let cityKey in details.cities) {
			let city = details.cities[cityKey];
			expect(city.lat).toBeLessThan(90.1);
			expect(city.lat).toBeGreaterThan(-90.1);
			expect(city.lng).toBeLessThan(180.1);
			expect(city.lng).toBeGreaterThan(-180.1);
		}
	});

	it("has all dates in an ISO 8601 format", () => {
		let details = data.getDetails();
		for (let trip of details.trips) {
			isISO8601(trip.startDate);
			isISO8601(trip.endDate);
			for (let city of trip.cities) {
				isISO8601(city.arrived);
				isISO8601(city.left);
			}
		}
	});

	it("has no trips have a start date occuring after the end date", () => {
		let details = data.getDetails();
		for (let trip of details.trips) {
			expect(trip.startDate <= trip.endDate).toBeTruthy();
		}
	});

	it("has no city arrival date occuring after the city left date", () => {
		let details = data.getDetails();
		for (let trip of details.trips) {
			for (let city of trip.cities) {
				expect(city.arrived <= city.left).toBeTruthy();
			}
		}
	});

	it("has no city arrival/left dates out of range of a trip's start/end dates", () => {
		let details = data.getDetails();
		for (let trip of details.trips) {
			console.log(trip.purpose);
			for (let city of trip.cities) {
				console.log(city.key);
				if (trip.startDate.length < city.arrived.length) {
					fail("trip start date is less accurate than city arrival date");
				} else {
					let shortest = city.arrived.length;
					let startComparison = trip.startDate.substr(0, shortest) <= city.arrived;
					expect(startComparison).toBeTruthy();
				}
				if (trip.endDate.length < city.left.length) {
					fail("trip end date is less accurate than the city leaving date");
				} else {
					let shortest = city.left.length;
					let endComparison = trip.endDate.substr(0, shortest) >= city.left;
					expect(endComparison).toBeTruthy();
				}
			}
		}
	});

	it("has no invalid city keys", () => {
		let details = data.getDetails();
		for (let trip of details.trips) {
			for (let city of trip.cities) {
				expect(details.cities[city.key]).not.toBeUndefined();
			}
		}
	});
});