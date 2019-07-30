// function doubleNumbers(arr){
//     // your code here
//   }


//  const fArray = [1, 2, 3, 4]

// const newArray = fArray.map(function(item){
//     return item * 2
//   })

// console.log(newArray)

// const strArray = fArray.map(function(item){
//     return item.toString()

// })

// console.log(strArray)

// const arrayNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// function capitalizeNames(arr){
    // your code here
//   }
  // const firstLetterCap = arrayNames.map(name =>{
  //   let lowCase = name.toLowerCase()
  //   let splitLowCase = lowCase.split('')
  //   splitLowCase[0] = splitLowCase[0].toUpperCase()
  //   let capArray = splitLowCase.join('')
  //   return capArray
    // return string with first letter capped
  // })
//  console.log(firstLetterCap)
  

// const array = [
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]

// const names = array.map((item) => {
//   return item.name
// })

// console.log(names)

// const array = [
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]
// const ageRequire = array.map(array => {
//    if(array.age >= 18){
//     return (`${array.name} is able to see it!`)
//   } else {
//     return (`${array.name} is not able to go!`)
//   }
  
// })

// console.log(ageRequire)

// const array = [
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]

// const nameAndAge = array.map(person =>{
//   return `<h1>${person.name}<h1><h2>${person.age}<h2>`
// })

// console.log(nameAndAge)

const numArray = [2, 4, 6, 78]
const doubleUp = numArray.map(num =>{
  return num *2
})
// console.log(doubleUp)

const stringify = numArray.map(num =>{
  return num.toString()
})
// console.log(stringify)

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeNames = names.map(item =>{
  let lowCase = item.toLowerCase()
  let lowSplit = lowCase.split('')
  lowSplit[0] = lowSplit[0].toUpperCase()
  let total = lowSplit.join('')
  return total
})
// console.log(capitalizeNames)

const peopleArray = [
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]
const namesOnly = peopleArray.map(person =>{
  if(person.age > 17){
    return `${person.name} can see the movie!`
  }else {
    return `${person.name} can not see the movie!`
  }
})
// console.log(namesOnly)
const namesAndAge = peopleArray.map(person =>{
  return `<h1>${person.name}<h1><h2>${person.age}<h2>`
})
console.log(namesAndAge)