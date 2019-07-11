const personalHistory = {
    name: "Evan",
    age: 30,
    schools: [
        {
            name: "South Umpqua High School",
            years: 3.5
        },
        {
            name: "Roseburg High",
            years: .5

        },
        {
            name: "Brigham Young University - Idaho",
            years: 5
        },
        {
            name: "V School",
            years: .25
        }
    ],
    married: true,
    children: [
        {
            name: "Eames",
            age: 4,
            eyes: "Blue"
        },
        {
            name: "Evie",
            age: 3,
            eyes: "Blue"
        }
    ],
    hobbies: [
        {
            activity: "drums",
            skill: 9,
            drumBrands: [
                {
                    name: "Ludwig",
                    item: "kit"
                },
                {
                    name: "Roland",
                    item: "kit"
                },
                {
                    name: "Zildjian",
                    item: "cymbals",
                    totNum: 6
                }
            ]
        }   
    ]

}

console.log(personalHistory.hobbies)