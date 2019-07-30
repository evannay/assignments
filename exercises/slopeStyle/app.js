function collectAnimals(...animals) {  
    return animals.sort((a, b) =>{
        return a > b
    })
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "zebra", "sam"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

// console.log(combineFruit(["apple", "pear"],
            //  ["cake", "pie"],
            //  ["carrit"]))
            
            
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
const {location} = vacation
const {duration} = vacation            
function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
}
// console.log(parseSentence())

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
        return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}
// console.log(returnFavorites(favoriteActivities))

const combineAnimals = (...arr) => {
 return arr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const evanAnimals = ['koala bear']
console.log(combineAnimals(...blah ))


const people = [
    {name: 'Bob', age: 31},
    {name: 'Joe', age: 29},
    {name: 'Ben', age: 42}
  ]
  const [{name}, {age}] = people 
  console.log(name)
  console.log(age)