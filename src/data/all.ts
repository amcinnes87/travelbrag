/**
 * Travel data for Brett & Andrea.
 *
 * All data must conform to JSON restrictions for data types.
 * For ISO 8601 dates, they can be as inexact as a year or as
 * specific as the day of the year. The key point is that they can be
 * inexact but they must be accurate.
 */
// https://gist.github.com/brettcannon/3f6d8fa7150e118c9c73
// https://gist.github.com/brettcannon/a17ef926ad4af6c13fa4

/// <reference path="../model.ts" />
/// <reference path="travellers.ts" />
/// <reference path="cities.ts" />
/// <reference path="2015.ts" />
/// <reference path="2014.ts" />
/// <reference path="2013.ts" />
/// <reference path="2012.ts" />
/// <reference path="2011.ts" />
/// <reference path="2010.ts" />
/// <reference path="2009.ts" />
/// <reference path="2008.ts" />
/// <reference path="1997.ts" />

module data {

	interface Details {
		name: string,
		travellers: model.Traveller[],
		cities: model.CityMap,
		trips: model.Trip[]
	}

	// Expected format of JSON data from server.
	export function getDetails(): Details {
		return {
				name: "Andrea & Brett",
				travellers: data.travellers,
				cities: data.cities,
				trips: data.trips2015.concat(data.trips2014)
									 .concat(data.trips2013)
									 .concat(data.trips2012)
                                     .concat(data.trips2011)
                                     .concat(data.trips2010)
                                     .concat(data.trips2009)
                                     .concat(data.trips2008)
                                     .concat(data.trips1997)
		};
	}
}