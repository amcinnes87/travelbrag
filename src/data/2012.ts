/// <reference path="../model.ts" />

module data {

	export let trips2012: model.Trip[] = [
		{
			purpose: "Winter holidays",
			travellers: ["Andrea", "Brett"],
			startDate: "2012-12-23",
			endDate: "2012-12-30",
			cities: [
				{
					key: "Vancouver",
					arrived: "2012-12-23",
					left: "2012-12-30"
				}
			]
		},
		{
			purpose: "PyCon AR",
			travellers: ["Brett"],
			startDate: "2012-11-12",
			endDate: "2012-11-19",
            photos: "https://goo.gl/photos/BJD3TBnXjM8Veyvj8",
			cities: [
				{
					key: "Buenos Aires",
					arrived: "2012-11-12",
					left: "2012-11-19"
				}
			]
		},
		{
			purpose: "Visit Will & Lauren",
			travellers: ["Andrea", "Brett"],
			startDate: "2012-10-05",
			endDate: "2012-10-09",
            photos: "https://goo.gl/photos/DFcTDkQQQjT1taC57",
			cities: [
				{
					key: "Chicago",
					arrived: "2012-10-05",
					left: "2012-10-09"
				}
			]
		},
		{
			purpose: "Eastern Canada",
			travellers: ["Andrea", "Brett"],
			startDate: "2012-06-16",
			endDate: "2012-06-22",
            photos: "https://goo.gl/photos/h8QpeDwFTAMHVMFD7",
			cities: [
				{
					key: "Montreal",
					arrived: "2012-06-16",
					left: "2012-06-17"
				},
				{
					key: "Quebec City",
					arrived: "2012-06-17",
					left: "2012-06-18"
				},
				{
					key: "Fredericton",
					arrived: "2012-06-18",
					left: "2012-06-19",
				},
				{
					key: "Halifax",
					arrived: "2012-06-19",
					left: "2012-06-20"
				},
				{
					key: "Sackville",
					arrived: "2012-06-20",
					left: "2012-06-22"
				},
				{
					key: "Charlottetown",
					arrived: "2012-06-21",
					left: "2012-06-21"
				},
			]
		},
        {
            purpose: "Visit Kingston & Ottawa",
            travellers: ["Andrea", "Brett"],
            startDate: "2012-05-19",
            endDate: "2012-05-20",
            photos: "https://goo.gl/photos/7HRb9iEfhx3LLX3n9",
            cities: [
                {
                    key: "Kingston",
                    arrived: "2012-05-19",
                    left: "2012-05-20"
                },
                {
                    key: "Ottawa",
                    arrived: "2012-05-20",
                    left: "2012-05-20"
                }
            ]
        },
        {
            purpose: "Visit Vancouver",
            travellers: ["Andrea", "Brett"],
            startDate: "2012-04-04",
            endDate: "2012-04-10",
            cities: [
                {
                    key: "Vancouver",
                    arrived: "2012-04-04",
                    left: "2012-04-10"
                }
            ]
        },
        {
            purpose: "Disneyland & PyCon US",
            travellers: ["Andrea", "Brett"],
            startDate: "2012-03-02",
            endDate: "2012-03-13",
            photos: "https://goo.gl/photos/fYDsfnSrEsnCCUQK9",
            cities: [
                {
                    key: "Anaheim",
                    arrived: "2012-03-02",
                    left: "2012-03-06"
                },
                {
                    key: "Santa Clara",
                    arrived: "2012-03-06",
                    left: "2012-03-13"
                }
            ]
        },
        {
            purpose: "Visit Niagara Falls",
            travellers: ["Andrea", "Brett"],
            startDate: "2012-01",
            endDate: "2012-01",
            photos: "https://goo.gl/photos/YQr18q3v11KnS8NR8",
            cities: [
                {
                    key: "Niagara Falls",
                    arrived: "2012-01",
                    left: "2012-01"
                }
            ]
        }
	];
}