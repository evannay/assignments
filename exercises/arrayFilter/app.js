// const numArray = [3, 6, 8, 2]

// const greaterThanFive = numArray.filter(num => {
//     return num > 5
// })
// console.log(greaterThanFive)

// const onlyEvenNumbers = numArray.filter(num => {
//     return num % 2 === 0
// })
// console.log(onlyEvenNumbers.sort((a, b) => {
    // return a - b
// }))

// const strArray = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const fiveOrLess = strArray.filter(str => {
//     return str.length < 5
// })
// console.log(fiveOrLess)
// console.log(fiveOrLess.sort((a, b) => {
//     return a > b
// }))

// const peopleArray = [
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]

// const members = peopleArray.filter(person => {
//     if(person.member === true){
//         return (`${person.name} is a member!`)
//     }
// })

// console.log(members)

// const moviePeopleArray = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const oldEnough = moviePeopleArray.filter(person => {
//     if(person.age >= 18){
//         return person.name
//     }
// })

// oldEnough.forEach((person => {
    // console.log(person.name)
// }))

const numArray = [77, 5, 1, 3, 4, 878, 9, 0]
const fiveOrGreater = numArray.filter(num =>{
    return num >= 5
})
console.log(fiveOrGreater)
const evenOnly = numArray.filter(num =>{
    if(num % 2 === 0){
        return num
    }
})
console.log(evenOnly)
const strArray = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveOrFewer = strArray.filter(str =>{
    if (str.length <= 5){
        return str
    }
})
console.log(fiveOrFewer)
const peopleArray = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]
const membershipStatus = peopleArray.filter(person =>{
    if(person.member === false){
        return person
    } 
})
console.log(membershipStatus)