/// <reference path="../model.ts" />

module data {

	export let trips2014: model.Trip[] = [
		{
			purpose: "Winter holidays w/ McInnes'",
			travellers: ["Andrea", "Brett"],
			startDate: "2014-12-18",
			endDate: "2015-01-02",
            photos: "https://goo.gl/photos/33zQFF6GcZrwVECc8",
			cities: [
				{
					key: "Vancouver",
					arrived: "2014-12-18",
					left: "2015-01-02"
				}
			]
		},
		{
			purpose: "Thumbtack",
			travellers: ["Andrea", "Brett"],
			startDate: "2014-10-10",
			endDate: "2014-10-15",
            photos: "https://goo.gl/photos/vTjUg3mqy5L7simq6",
			cities: [
				{
					key: "San Francisco",
					arrived: "2014-10-10",
					left: "2014-10-15"
				}
			]
		},
		{
			purpose: "RB & RC's wedding",
			travellers: ["Andrea", "Brett"],
			startDate: "2014-08-22",
			endDate: "2014-08-26",
			cities: [
				{
					key: "Vancouver",
					arrived: "2014-08-22",
					left: "2014-08-23"
				},
				{
					key: "Seattle",
					arrived: "2014-08-23",
					left: "2014-08-25"
				},
				{
					key: "Vancouver",
					arrived: "2014-08-25",
					left: "2014-08-26"
				}
			]
		},
		{
			purpose: "Visit Paul in St. John's",
			travellers: ["Andrea", "Brett"],
			startDate: "2014-07-31",
			endDate: "2014-08-04",
            photos: "https://goo.gl/photos/MXJQt4wk5Dtbp3PS6",
			cities: [
				{
					key: "St. John's",
					arrived: "2014-07-31",
					left: "2014-08-04"
				}
			]
		},
		{
			purpose: "Our reception",
			travellers: ["Andrea", "Brett"],
			startDate: "2014-06-12",
			endDate: "2014-06-28",
            photos: "https://goo.gl/photos/rWUxemD5Ema6oKfK9",
			cities: [
				{
					key: "Vancouver",
					arrived: "2014-06-12",
					left: "2014-06-14"
				},
				{
					key: "Victoria",
					arrived: "2014-06-14",
					left: "2014-06-16",
				},
				{
					key: "Vancouver",
					arrived: "2014-06-16",
					left: "2014-06-18"
				},
				{
					key: "Manning Park",
					arrived: "2014-06-18",
					left: "2014-06-20"
				},
				{
					key: "Osoyoos",
					arrived: "2014-06-20",
					left: "2014-06-22"
				},
				{
					key: "Kelowna",
					arrived: "2014-06-22",
					left: "2014-06-24"
				},
				{
					key: "Monck Park",
					arrived: "2014-06-24",
					left: "2014-06-25"
				},
				{
					key: "Vancouver",
					arrived: "2014-06-25",
					left: "2014-06-28"
				},
			]
		},
		{
			purpose: "PyCon",
			travellers: ["Andrea", "Brett"],
			startDate: "2015-04-08",
			endDate: "2015-04-16",
            photos: "https://goo.gl/photos/vfqJkdJjC7PAFA6SA",
			cities: [
				{
					key: "Montreal",
					arrived: "2015-04-08",
					left: "2015-04-16"
				}
			]
		}
	];
}