/// <reference path="../model.ts" />

module data {

    export let trips2006: model.Trip[] = [
        {
            purpose: "Visit family in the UK",
            travellers: ["Andrea"],
            startDate: "2006-07",
            endDate: "2006-07",
            cities: [
                {
                    key: "London",
                    arrived: "2006-07",
                    left: "2006-07"
                },
                {
                    key: "Brighton",
                    arrived: "2006-07",
                    left: "2006-07"
                },
                {
                    key: "Ely",
                    arrived: "2006-07",
                    left: "2006-07"
                },
                {
                    key: "Shoreham-by-Sea",
                    arrived: "2006-07",
                    left: "2006-07"
                }
            ]
        },
        {
            purpose: "PyCon US",
            travellers: ["Brett"],
            startDate: "2006-03",
            endDate: "2006-03",
            cities: [
                {
                    key: "Addison",
                    arrived: "2006-03",
                    left: "2006-03"
                }
            ]
        }
    ];
}