/// <reference path="../model.ts" />

module data {

    export let trips2005: model.Trip[] = [
        {
            purpose: "Visit Alberta",
            travellers: ["Andrea"],
            startDate: "2005-07",
            endDate: "2005-07",
            cities: [
                {
                    key: "Calgary",
                    arrived: "2005-07",
                    left: "2005-07"
                },
                {
                    key: "Edmonton",
                    arrived: "2005-07",
                    left: "2005-07"
                }
            ]
        },
        {
            purpose: "PyCon US",
            travellers: ["Brett"],
            startDate: "2005-03",
            endDate: "2005-03",
            cities: [
                {
                    key: "Washington, D.C.",
                    arrived: "2005-03",
                    left: "2005-03"
                }
            ]
        }
    ];
}