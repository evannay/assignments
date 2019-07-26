// const ownerName = "John"
// let age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//              name = "fluffy"
//         } else {
//              name = "spot"
//         }
//         pet.name = name
//         console.log(pet)
//         petObjects.push(pet)
//     }
//     return null
// }

// runForLoop()
// console.log(petObjects)



// function add(num1, num2){
//     return num1 + num2
// }
// console.log(add(3,4))

// const addition = (num1, num2) => num1 + num2

// console.log(addition(3,4))



// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables(carrots))

// const mapVeggies = arr => arr.map(carrot => {
//     return { type: "carrot", name: carrot }
// })
// console.log(mapVeggies(carrots))

 const pickels = ['sweet', 'dill', 'solenia', 'Rick']   

function returnFirst(items){
    return items[0];
    
}

const rick = {
    name: "Rick",
    alias: 'solenia'
}

const {name, alias} = rick

console.log(`name: ${alias}`)
