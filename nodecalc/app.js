const readlineSync = require('readline-sync')

// function add(num1, num2){
//     return num1 + num2
// }
// function subtract(num1, num2){
//     return num1 - num2
// }
// function multiply(num1, num2){
//     return num1 * num2
// }
// function divide(num1, num2){
//     return num1 / num2
// }
// const action = ['Add', 'Subtract', 'Multiply', 'Divide']
// let num1 = Number(readlineSync.question('What is your first number?'))
// let num2 = Number(readlineSync.question('What is your second number?'))
// const answer = readlineSync.keyInSelect(action, "Please enter the operation to perform.")
// if(answer === 0){
//     console.log(add(num1, num2))
//     } else if(answer === 1){
//         console.log(subtract(num1, num2))
//     }else if(answer === 2){
//         console.log(multiply(num1, num2))
//     }else if(answer === 3){
//         console.log(`The answer is ${divide(num1, num2)}!`)
//     }

function fight(){

}
function loot(){

}
function run(){

}
let health = 100

const fightActions = ['throw right hook', 'kick the groin', 'try to run away scared', 'play dead']
while(health > 0){
const movement = ['walk', 'turn around', 'run']
let action = readlineSync.keyInSelect(movement, 'what would you like to do?')

let action1 = readlineSync.keyInSelect(fightActions, "What action would you like to take?")
}