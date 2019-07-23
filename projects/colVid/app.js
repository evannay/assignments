const readlineSync = require('readline-sync')
// let userName = readlineSync.question('May I have your name?')
// console.log(`Hello ${userName}!`)
fatigue = false
let health = 100
let enemyHealth = 100
const enemyNames = ['Kim Kardashian', 'Snorlax', 'Mr. T']
const fOptions = ['groin kick', 'molotov', 'judo chop']
const fightOptions =['run', 'fight']
const options = ['walk', 'run', 'rest',]
while(health > 0){
index = readlineSync.keyInSelect(options, "What would you like to do?")
if(index === 0){
    let chance = Math.floor(Math.random() * 3)
    console.log(chance)
    if(chance > 0){
        console.log("You have walked peacefully")
    } else {
        fight()
    }
    
} else if(index === 1){
    fatigue = true
    console.log("You feel fatigued.")
} else if(index === 2){
    console.log("You feel rested.")
} 
}




function fightLoop(){
    while(health > 0 && enemyHealth > 0){
    index = readlineSync.keyInSelect(fOptions, "what do you wish to do?")
    if(index === 0){
        let chance = Math.floor(Math.random() * 20)
        let damage = chance * 4
        enemyHealth-- * damage    //WHAT TO DO HERE
        console.log(`You groin kick for ${damage} damage!`)
    }
}
}




function fight(){
    let chance = Math.floor(Math.random() * 3)
        if(chance === 0){
            console.log(`A wild ${enemyNames[0]} appears!`)
            index = readlineSync.keyInSelect(fightOptions, "What would you like to do?")
            if(index === 1){
                fightLoop()
            } else{
                if(fatigue = false){          
                console.log("You have escaped!")
            } else if(fatigue = true){
                console.log("You cannot escape!")
            }
        }
        } else if(chance === 1){
            console.log(`A wild ${enemyNames[1]} appears!`)
            index = readlineSync.keyInSelect(fightOptions, "What would you like to do?")
            if(index === 1){
                fightLoop()
            } else {
                console.log("You have escaped!")
            }
        } else {
            console.log(`A wild ${enemyNames[2]} appears!`)
            index = readlineSync.keyInSelect(fightOptions, "What would you like to do?")
            if(index === 1){
                fightLoop()
            }else {
                console.log("You have escaped!")
            }
        }

     }
    
