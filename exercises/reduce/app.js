// const numArray = [1,2,3,4,5]
// const addNumbers = numArray.reduce((a, b) => {
//     return a + b
// })
// console.log(addNumbers)

// const strNumbers = numArray.reduce((a, b) => {
//     return `${a}, ${b}`

// })

// console.log(strNumbers)

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const voterNumbers = voters.filter(person => {
//     if(person.voted === true){
//         return person
//     } 
// })
// console.log(voterNumbers.length)

// const wishList = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]
// const listPrice = wishList.reduce((a, b) => {
//     return a + b.price
// }, 0)
// console.log(listPrice)

// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// const finishedArray = arrays.reduce((a, b) => {
//     return a.concat(...b)
// }, [])

// console.log(finishedArray)

// const array = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const newObject = array.reduce((a,b) => {
//     if(b.age < 26){
//         a.youth++
//         if(b.voted === true){
//             a.youngVotes++
//         }
//     } else if(b.age > 25 && b.age < 36) {
//         a.mids++
//         if(b.voted === true){
//             a.midVotes++
//         }
//     } else if(b.age > 35){
//         a.olds++
//         if(b.voted === true){
//             a.oldVotes++
//         }
//     }
//     return a
// },{
//     youngVotes : 0,
//     youth : 0,
//     midVotes : 0,
//     mids : 0,
//     oldVotes : 0,
//     olds : 0
// })

// console.log(newObject)

// const numArray = [1, 6, 4, 7, 8, 98]
// const total = numArray.reduce((a, b) => {
//     return a + b
// })
// console.log(total)

// const stringify = numArray.reduce((a, b) => {
//     return `${a}${b}`
// }, '')
// console.log(stringify)

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// const ballotsReceived = voters.reduce((a,b) =>{
//     return a + b.voted
// }, 0)
// console.log(ballotsReceived)

// const votingNumbers = voters.reduce((a, b) => {
//     if(b.age < 26){
//         a.youth++
//     }
// }, {
//     youth: 0,
//     youthVotes: 0,
//     mids: 0,
//     midsVotes: 0,
//     olds: 0,
//     oldsVotes: 0
// })
// console.log(votingNumbers)