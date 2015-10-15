/// <reference path="../model.ts" />

module data {

    export let trips2003: model.Trip[] = [
        {
            purpose: "Todd's wedding",
            travellers: ["Brett"],
            startDate: "2003-07",
            endDate: "2003-07",
            cities: [
                {
                    key: "Mammoth Lakes",
                    arrived: "2003-07",
                    left: "2003-07"
                },
                {
                    key: "Yosemite Valley",
                    arrived: "2003-07",
                    left: "2003-07"
                }
            ]
        },
        {
            purpose: "PyCon US",
            travellers: ["Brett"],
            startDate: "2003-03",
            endDate: "2003-03",
            cities: [
                {
                    key: "Washington, D.C.",
                    arrived: "2003-03",
                    left: "2003-03"
                }
            ]
        },
        {
            purpose: "Todd's bachelor party",
            travellers: ["Brett"],
            startDate: "2003",
            endDate: "2003",
            cities: [
                {
                    key: "Las Vegas",
                    arrived: "2003",
                    left: "2003"
                }
            ]
        }
    ];
}