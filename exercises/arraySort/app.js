// const arr = [1, 3, 5, 2, 90, 20]

// const newArr = arr.sort((a, b) =>{
//    return a - b
// })
// console.log(newArr)

// const arr = [4, 7, 2, 88, 67, 9,]

// const newArr = arr.sort((a,b) => {
//     return b - a
// })

// console.log(newArr)


  
// const arr = ["dog", "wolf", "by", "family", "eaten"]

// const newArr = arr.sort((a, b) =>{
//     return a.length - b.length
// })

// console.log(newArr)

// const arr = ["dog", "wolf", "by", "family", "eaten"]

// const newArr = arr.sort((a, b) => {
//     return a > b
// })

// console.log(newArr)

// const arr = [
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]



//console log the parameters when in doubt !!!!!!!

// const newArr = arr.sort((a, b) =>{
    
//     return a.age - b.age
// })
// console.log(newArr)

const randomArray = [5, 65, 45, 0, 33, -5, 54, 2, 8, 99, ]
const leastToGreatest = randomArray.sort((a, b) =>{
    return a - b
})
// console.log(leastToGreatest)

const randomStringArray = ["dog", "wolf", "by", "family", "eaten"]
const refinedString = randomStringArray.sort()
// console.log(refinedString)

const peopleArray = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]
const youngToOld = peopleArray.sort((a, b) => {
    return a.age - b.age
})
console.log(youngToOld)