var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// function forception(people, alphabet){
//     result = []
//     for(let i =0; i < people.length; i++){
//         result.push(people[i] + ':')
//         for(let j = 0; j < alphabet.length; j++){
//             result.push(alphabet[j].toUpperCase())   
//         }
//     }
//     return result
// }

// console.log(forception(people, alphabet))

// for(let i = 0; i < alphabet.length; i++){
//     console.log(alphabet)
// }

function forception(people, alphabet){
    let result = []
    for(let i = 0; i < people.length; i++){
        result.push(people[i] + ':')
        for(let j = 0; j < alphabet.length; j++){
            result.push(alphabet[j].toUpperCase())
        }
    }
    return result
}

console.log(forception(people,alphabet))