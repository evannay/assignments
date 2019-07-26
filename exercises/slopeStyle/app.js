function collectAnimals(...animals) {  
    return animals.sort((a, b) =>{
        return a > b
    })
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "zebra", "sam"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]