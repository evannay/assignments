// function stringExercise(str) {
// let upStr = str.toUpperCase()
// let lowStr = str.toLowerCase()
// let newStr = upStr + lowStr
// return newStr
// }

// console.log(stringExercise("Hello"))

// function findMiddleIndex(str) {
//     let halfLength = str.length / 2 
//     return halflength = Math.floor(halfLength)
// }
// console.log(findMiddleIndex("123456789"))

// function findMiddleIndex(str) {
//     let halfLength = str.length / 2
//     let newStr = str.slice(halfLength)
//     return newStr = Math.floor(newStr)
    
// }

// console.log(findMiddleIndex("1234567890"))

// function capitalizeAndLowercase(str) {
//     let half = Math.floor(str.length / 2)
//     let upperCase = str.slice(0, half).toUpperCase()
//     let lowerCase = str.slice(half).toLowerCase()
//     return upperCase + lowerCase
// }

// console.log(capitalizeAndLowercase('asdfasdfghjkl'))

// function capitalizeAndLowerCase(str) {
//     let cap = str.toUpperCase()
//     let lower = str.toLowerCase()
//     return cap + lower
// }
// console.log(capitalizeAndLowerCase("Jumanji"))

// function findMiddleIndex(str) {
//     let half = Math.floor(str.length / 2)
//     return half
// }
// console.log(findMiddleIndex("Jumanji"))

// function returnFirstHalf(str) {
//     let halved = Math.floor(str.length / 2)
//     let firstHalf = str.slice(0, halved)
//     return firstHalf
// }
// console.log(returnFirstHalf("Jumanji"))

// function capAndLower(str) {
//     let halved = Math.floor(str.length / 2)
//     firstHalf = str.slice(0, halved).toUpperCase()
//     secondHalf = str.slice(halved, str.length).toLowerCase()
//     return firstHalf.concat(secondHalf)
// }
// console.log(capAndLower("Jumanji"))


// function firstLettersCap(str) {
//     let splitStr = str.split(' ')
//     let result = ''
//     for(i = 0; i < splitStr.length; i++) {
//          result += splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1) + ' '
//     } return result
// }
// console.log(firstLettersCap("Jumanji is the best movie ever!"))

// function capAndLow(str) {
//     let up = str.toUpperCase()
//     let low = str.toLowerCase()
//     return up.concat(low)
// }
// console.log(capAndLow("Just give me a medal."))


// function justHalf(str) {
//     let halfOfThis = Math.floor(str.length / 2)
//     return halfOfThis
// }
// console.log(justHalf("123456789012"))

// function firstHalfBack(str) {
//     let halfway = Math.floor(str.length / 2)
//     let firstHalf = str.slice(0, halfway).toUpperCase()
//     return firstHalf
// }
// console.log(firstHalfBack('asdfghjkl'))

// function upperLower(str) {
//     let str1 = str.toUpperCase()
//     let str2 = str.toLowerCase()
//     result = str1.concat(str2)
//     return result
// }
// console.log(upperLower("Jupiter's Moon"))

// function returnHalf (str) {
//     let half = Math.floor(str.length / 2)
//     return half
// }
// console.log(returnHalf("Jupiter's Moon"))

// function returnFirstHalf(str) {
//     let half = Math.floor(str.length / 2)
//     let firstHalf = str.slice(0, half)
//     return firstHalf
// }
// console.log(returnFirstHalf("I'm listening to Skyrim"))

// function capitalizeAndLowerCase(str) {
//     let half = Math.floor(str.length / 2)
//     let upHalf = str.slice(0, half).toUpperCase()
//     let lowerHalf = str.slice(half).toLowerCase()
//     return upHalf + lowerHalf
// }
// console.log(capitalizeAndLowerCase("Jupiter and my toggles booty"))

// function stringToLowerCase(string){
//     return string.toLowerCase()
// }

// function stringToUpperCase(string){
//     return string.toUpperCase()
// }

// function stringHalfAndHalf(string){
//     let low = string.toLowerCase()
//     let high = string.toUpperCase()
//     let newString = low + high
//     return newString
// }

// function firstHalfSecondHalf(string){
//     let halfLength = string.length / 2
//     let upperhalf = string.slice(0, halfLength).toUpperCase()
//     let lowerhalf = string.slice(halfLength, string.length).toLowerCase()
//     return upperhalf + lowerhalf
// }

// function firstLetterCaps(str){
//     let array = str.split(' ')
//     let newArray = array.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     let final = newArray.join(' ')
//     return final
// }


// console.log(firstLetterCaps('this is a test'))

// function myTestCaps(str){
//     let array = str.split(' ')
//     let newArray = []
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
//         return newArray
//     }
// }

// console.log(myTestCaps('this is a test'))

function findIndex(array, num){
    for(let i = 0; i < array.length; i++){
        if (array[i] === num){
            return i
        }
    }
}

console.log(findIndex[1,2,3,4,5], 1)