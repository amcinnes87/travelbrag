/// <reference path="jasmine.d.ts" />
/// <reference path="../../src/model.ts" />
/// <reference path="../../src/viewmodel.ts" />

describe("viewmodel.citiesToTrips()", () => {
	let vancouver: model.City = {
		name: "Vancouver",
		country: "CAN",
		lat: 0,
		lng: 1
	}

	let seattle: model.City = {
		name: "Seattle",
		country: "USA",
		lat: -1,
		lng: 0
	}

	let allCities: model.CityMap = {
		"Vancouver": vancouver,
		"Seattle": seattle
	}

	it("copies cities", () => {
		let trip: model.Trip = {
			purpose: "Testing city immutability",
			travellers: ["Brett"],
			startDate: "2015",
			endDate: "2015",
			cities: [
				{
					key: "Vancouver",
					arrived: "2015",
					left: "2015"
				}
			]
		}

		let cities = viewmodel.tripsToCities(allCities, [trip]);
		expect(cities.length).toBe(1);
		let city = cities[0];
		expect(city.name).toBe("Vancouver");
		expect(city.country).toBe("CAN");
		expect(city.lat).toBe(0);
		expect(city.lng).toBe(1);
		expect(city.travellers).toEqual(["Brett"]);
		expect(city.lastVisited).toBe("2015");

		city.name = "Mutated";
		expect(vancouver.name).toBe("Vancouver");
	});

	it("uses all cities from all trips", () => {
		let canadaTrip: model.Trip = {
			purpose: "Trip merging: Canada",
			startDate: "2015",
			endDate: "2015",
			travellers: ["Brett"],
			cities: [
				{
					key: "Vancouver",
					arrived: "2015",
					left: "2015"
				}
			]
		};

		let usaTrip: model.Trip = {
			purpose: "Trip merging: USA",
			startDate: "2015",
			endDate: "2015",
			travellers: ["Andrea"],
			cities: [{
				key: "Seattle",
				arrived: "2015",
				left: "2015"
			}]
		};

		let cities = viewmodel.tripsToCities(allCities, [canadaTrip, usaTrip]);
		expect(cities.length).toBe(2);

		let [firstCity, secondCity] = cities;
		if (firstCity.name == "Vancouver") {
			expect(secondCity.name).toBe("Seattle");
		} else {
			expect(secondCity.name).toBe("Vancouver");
			expect(firstCity.name).toBe("Seattle");
		}
	});

	describe("merges travellers", () => {
		it("when the travelers overlap", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2015-01",
				endDate: "201501",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-01",
					left: "2015-01"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2015-02",
				endDate: "201501",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-02",
					left: "2015-02"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip1, trip2]);
			expect(cities.length).toBe(1);
			let travellers: {[id: string]: boolean} = {};
			for (let traveller of cities[0].travellers) {
				travellers[traveller] = true;
			}
			expect(travellers).toEqual({"Andrea": true, "Brett": true});
		});

		it("when the travelers are unique", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2015-01",
				endDate: "201501",
				travellers: ["Andrea"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-01",
					left: "2015-01"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2015-02",
				endDate: "201501",
				travellers: ["Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-02",
					left: "2015-02"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip1, trip2]);
			expect(cities.length).toBe(1);
			let travellers: {[id: string]: boolean} = {};
			for (let traveller of cities[0].travellers) {
				travellers[traveller] = true;
			}
			expect(travellers).toEqual({"Andrea": true, "Brett": true});
		});

	});

	describe("always chooses the latest visit", () => {
		it("when the latest is listed first", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2015-01",
				endDate: "201501",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-01",
					left: "2015-01"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2015-02",
				endDate: "201501",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-02",
					left: "2015-02"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip2, trip1]);
			expect(cities.length).toBe(1);
			expect(cities[0].lastVisited).toEqual("2015-02");

		});

		it("when the latest is listed last", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2015-01",
				endDate: "201501",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-01",
					left: "2015-01"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2015-02",
				endDate: "201501",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-02",
					left: "2015-02"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip1, trip2]);
			expect(cities.length).toBe(1);
			expect(cities[0].lastVisited).toEqual("2015-02");
		});

		it("2015 over 2014-12", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2015",
				endDate: "2015",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015",
					left: "2015"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2014-12",
				endDate: "2014-12",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2014-12",
					left: "2014-12"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip1, trip2]);
			expect(cities.length).toBe(1);
			expect(cities[0].lastVisited).toEqual("2015");
		});

		it("2015-01 over 2014", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2014",
				endDate: "2014",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2014",
					left: "2014"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2015-01",
				endDate: "2015-01",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-01",
					left: "2015-01"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip1, trip2]);
			expect(cities.length).toBe(1);
			expect(cities[0].lastVisited).toEqual("2015-01");
		});

		it("2015-02 over 2015-01", () => {
			let trip1: model.Trip = {
				purpose: "First trip",
				startDate: "2015-01",
				endDate: "2015-01",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-01",
					left: "2015-01"
				}]
			}

			let trip2: model.Trip = {
				purpose: "Second trip",
				startDate: "2015-02",
				endDate: "2015-02",
				travellers: ["Andrea", "Brett"],
				cities: [{
					key: "Vancouver",
					arrived: "2015-02",
					left: "2015-02"
				}]
			}

			let cities = viewmodel.tripsToCities(
				{"Vancouver": vancouver},
				[trip1, trip2]);
			expect(cities.length).toBe(1);
			expect(cities[0].lastVisited).toEqual("2015-02");
		});
	});
});