/// <reference path="../model.ts" />

module data {
	export var trips2015: model.Trip[] = [
        {
            purpose: "US Thanksgiving",
            travellers: ["Andrea", "Brett"],
            startDate: "2015-11-23",
            endDate: "2015-11-30",
            cities: [
                {
                    key: "Meridian",
                    arrived: "2015-11-23",
                    left: "2015-11-30"
                }
            ]
        },
        {
            purpose: "PyCon CA/PyData NYC",
            travellers: ["Andrea", "Brett"],
            startDate: "2015-11-06",
            endDate: "2015-11-15",
            cities: [
                {
                    key: "Toronto",
                    arrived: "2015-11-06",
                    left: "2015-11-08"
                },
                {
                    key: "New York",
                    arrived: "2015-11-08",
                    left: "2015-11-11"
                },
                {
                    key: "Union City",
                    arrived: "2015-11-11",
                    left: "2015-11-15"
                },
                {
                    key: "New Haven",
                    arrived: "2015-11-14",
                    left: "2015-11-14"
                }
            ]
        },
		{
			purpose: "Continuum work",
			travellers: ["Andrea"],
			startDate: "2015-09-15",
			endDate: "2015-09-19",
			cities: [
				{
					key: "Austin",
					arrived: "2015-09-15",
					left: "2015-09-19"
				}
			]
		},
		{
			purpose: "Labour Day",
			travellers: ["Andrea", "Brett"],
			startDate: "2015-09-03",
			endDate: "2015-09-08",
			cities: [
				{
					key: "Langley",
					arrived: "2015-09-03",
					left: "2015-09-08"
				}
			]
		},
		{
			purpose: "PyData Seattle",
			travellers: ["Brett"],
			startDate: "2015-07-23",
			endDate: "2015-07-31",
			photos: "https://goo.gl/photos/U9EAag9xicY8h7vi6",
			cities: [
				{
					key: "Redmond",
					arrived: "2015-07-23",
					left: "2015-07-31"
				}
			]
		},
		{
			purpose: "Continuum training",
			travellers: ["Andrea"],
			startDate: "2015-07-19",
			endDate: "2015-07-24",
			photos: "https://goo.gl/photos/R9mrmRmuPHdzU4G97",
			cities: [
				{
					key: "Austin",
					arrived: "2015-07-19",
					left: "2015-07-24"
				}
			]
		},
		{
			purpose: "Move to the best coast",
			travellers: ["Andrea", "Brett"],
			startDate: "2015-06-22",
			endDate: "2015-07-01",
            photos: "https://goo.gl/photos/anSScBvK1yvJMwg26",
			cities: [
				{
					key: "Guelph",
					arrived: "2015-06-22",
					left: "2015-06-24"
				},
				{
					key: "Sudbury",
					arrived: "2015-06-24",
					left: "2015-06-25"
				},
				{
					key: "Wawa",
					arrived: "2015-06-25",
					left: "2015-06-26"
				},
				{
					key: "Thunder Bay",
					arrived: "2015-06-26",
					left: "2015-06-27"
				},
				{
					key: "Winnipeg",
					arrived: "2015-06-27",
					left: "2015-06-28"
				},
				{
					key: "Regina",
					arrived: "2015-06-28",
					left: "2015-06-29"
				},
				{
					key: "Calgary",
					arrived: "2015-06-29",
					left: "2015-06-30"
				},
				{
					key: "Creston",
					arrived: "2015-06-30",
					left: "2015-06-30"
				},
				{
					key: "Nelson",
					arrived: "2015-06-30",
					left: "2015-07-01"
				}
			]
		},
		{
			purpose: "Continuum interviews",
			travellers: ["Andrea", "Brett"],
			startDate: 	"2015-05-17",
			endDate: "2015-05-19",
            photos: "https://goo.gl/photos/TcjCPCmu85SeAXyA7",
			cities: [
				{
					key: "Austin",
					arrived: "2015-05-17",
					left: "2015-05-19"
				}
			]
		},
		{
			purpose: "Microsoft interviews",
			travellers: ["Brett"],
			startDate: "2015-04-30",
			endDate: "2015-05-02",
			cities: [
				{
					key: "Redmond",
					arrived: "2015-04-30",
					left: "2015-05-02"
				}
			]
		},
		{
			purpose: "PyCon",
			travellers: ["Andrea", "Brett"],
			startDate: "2015-04-07",
			endDate: "2015-04-15",
			comment: "Andrea didn't come until the 10th",
            photos: "https://goo.gl/photos/dxGD9qh69W4RR5iM6",
			cities: [
				{
					key: "Montreal",
					arrived: "2015-04-07",
					left: "2015-04-15"
				}
			]
		},
		{
			purpose: "Visit Claire & Irving",
			travellers: ["Brett", "Andrea"],
			startDate: "2015-04-02",
			endDate: "2015-04-07",
            photos: "https://goo.gl/photos/dxGD9qh69W4RR5iM6",
			cities: [
				{
					key: "Montclair",
					arrived: "2015-04-02",
					left: "2015-04-07"
				}
			]
		}
	];
}