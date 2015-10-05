/// <reference path="../model.ts" />

module data {

    export let trips2004: model.Trip[] = [
        {
            purpose: "Visit Claire & Irving",
            travellers: ["Andrea"],
            startDate: "2004-07",
            endDate: "2004-07",
            cities: [
                {
                    key: "Montclair",
                    arrived: "2004-07",
                    left: "2004-07"
                },
                {
                    key: "New York",
                    arrived: "2004-07",
                    left: "2004-07"
                },
                {
                    key: "Atlantic City",
                    arrived: "2004-07",
                    left: "2004-07"
                }
            ]
        },
        {
            purpose: "PyCon US",
            travellers: ["Brett"],
            startDate: "2004-03",
            endDate: "2004-03",
            cities: [
                {
                    key: "Washington, D.C.",
                    arrived: "2004-03",
                    left: "2004-03"
                }
            ]
        }
    ];
}