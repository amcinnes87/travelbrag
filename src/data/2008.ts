/// <reference path="../model.ts" />

module data {

	export let trips2008: model.Trip[] = [
        {
            purpose: "SOUPS",
            travellers: ["Brett"],
            startDate: "2008-07-22",
            endDate: "2008-07-25",
            cities: [
                {
                    key: "Pittsburgh",
                    arrived: "2008-07-22",
                    left: "2008-07-25"
                }
            ]
        },
        {
            purpose: "Visit Jer",
            travellers: ["Brett"],
            startDate: "2008-06-27",
            endDate: "2008-06-29",
            cities: [
                {
                    key: "Seattle",
                    arrived: "2008-06-27",
                    left: "2008-06-29"
                }
            ]
        },
		{
			purpose: "Japan",
			travellers: ["Andrea"],
			startDate: "2008-04",
			endDate: "2008-05",
			cities: [
				{
					key: "Annaka",
					arrived: "2008",
					left: "2008"
				},
				{
					key: "Hiroshima",
					arrived: "2008",
					left: "2008"
				},
				{
					key: "Kyoto",
					arrived: "2008",
					left: "2008"
				},
				{
					key: "Nara",
					arrived: "2008",
					left: "2008"
				},
				{
					key: "Osaka",
					arrived: "2008",
					left: "2008"
				},
				{
					key: "Takasaki",
					arrived: "2008",
					left: "2008"
				},
				{
					key: "Tokyo",
					arrived: "2008",
					left: "2008"
				}
			]
		},
        {
            purpose: "AOSD",
            travellers: ["Brett"],
            startDate: "2008-03-27",
            endDate: "2008-04-07",
            cities: [
                {
                    key: "Brussels",
                    arrived: "2008-03-28",
                    left: "2008-04-07"
                },
                {
                    key: "Ghent",
                    arrived: "2008-04",
                    left: "2008-04"
                }
            ]
        }
	];
}