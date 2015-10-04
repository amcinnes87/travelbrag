/// <reference path="../model.ts" />

module data {

    export let trips2002: model.Trip[] = [
        {
            purpose: "Visit UK after graduation",
            travellers: ["Brett"],
            startDate: "2002-10",
            endDate: "2002-11",
            cities: [
                {
                    key: "London",
                    arrived: "2002",
                    left: "2002"
                },
                {
                    key: "Brighton",
                    arrived: "2002",
                    left: "2002"
                },
                {
                    key: "York",
                    arrived: "2002",
                    left: "2002"
                },
                {
                    key: "Edinburgh",
                    arrived: "2002",
                    left: "2002"
                },
                {
                    key: "Oxford",
                    arrived: "2002",
                    left: "2002"
                }
            ]
        },
        {
            purpose: "NeoCon",
            travellers: ["Brett"],
            startDate: "2002-06",
            endDate: "2002-06",
            cities: [
                {
                    key: "Chicago",
                    arrived: "2002-06",
                    left: "2002-06"
                }
            ]
        }
    ];
}