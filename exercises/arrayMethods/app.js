var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
fruit.shift()
let indexOrange = fruit.indexOf('orange')
fruit.push(1)
let vLength = vegetables.length
vegetables.push(3)
// let strFruit = fruit.join(' ')
// let strVeg = vegetables.join(' ')
// let total = strFruit.concat(strVeg)
let food = fruit.concat(vegetables)
food.splice(4,2)
food.reverse()
let newFood= food.join(',')
console.log(newFood)
console.log(fruit)
console.log(vegetables)