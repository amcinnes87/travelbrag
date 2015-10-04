module model {

	export interface Traveller {
		names: string[];
		colour: string;  // Hexadecimal.
	}

	export interface City {
		name: string;
		country: string;  // ISO 3166-1 alpha-3.
		lat: number;
		lng: number;
	}

	export interface CityMap {
		[key: string]: City;
	}

	export interface VisitedCity {
		key: string;
		arrived: string;  // ISO 8601.
		left: string;  // ISO 8601.
	}

	export interface Trip {
		purpose: string;
		travellers: string[];
		startDate: string;  // ISO 8601.
		endDate: string;  // ISO 8601.
		photos?: string;  // URL.
		comment?: string,
		cities: VisitedCity[];
	}
}