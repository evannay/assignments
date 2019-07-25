const readlineSync= require('readline-sync')
let userName = readlineSync.question('May I have your name?')
console.log(`Hello ${userName}!`)

let fatigue = false
let health = 100
const inventory = []
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
    fatigue = false
    console.log("You feel rested.")
} 
}








function fightLoop(){
    let enemyHealth = 100
    while(health > 0 && enemyHealth > 0){
        index = readlineSync.keyInSelect(fOptions, "what do you wish to do?")
        if(index === 0){
            let chance = Math.floor(Math.random() * 20)
            let playerChance = Math.floor(Math.random() * 20)
            let damage = chance * 4
            let playerDamage = playerChance * 1
            health -= playerDamage
            enemyHealth -= damage
            if(enemyHealth <= 0){
                console.log("You've won!")
            }  
            console.log(`You groin kick for ${damage} damage!, but you took ${playerDamage} damage!`)
        } else if(index === 1){
            let chance = Math.floor(Math.random() * 3)
            let damage = chance * 25
            enemyHealth -= damage
            if(enemyHealth <= 0){
                console.log("You've won!")
            }
            console.log(`You throw a molotov for ${damage} damage!`)
        } else {
            let chance = Math.floor(Math.random() * 30)
            let damage = chance * 2
            enemyHealth -= damage
            if(enemyHealth <=0){
                console.log("You've won!")
            }
            console.log(`You judo chop for ${damage} damage!`)
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
                if(fatigue === false){          
                console.log("You have escaped!")
            } else if(fatigue === true){
                console.log("You cannot escape!")
                fightLoop()
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
    




// const nOption = ['walk', 'rest', 'end game']

// let alive = true;
// let won = false;

// function Enemy(name, hp, attack){
//     this.name = name
//     this.hp = hp
//     this.attack = attack
// }

// let kimK = new Enemy('Kim Kardashian', 50, 10)
// let snorlax = new Enemy('Snorlax', 75, 12)
// let mrT = new Enemy("Cyborg", 75, 15)

// function Player (name, hp = 100, attack){
//     this.name = name
//     this.hp = hp
//     this.attack = 20
// }

// let name = readline.question("What is your name?")

// const player1 = new Player(name)

// console.log(`Get ready to play, ${name}`)

// while(alive && !won){
//     index = readline.keyInSelect(nOption, "What would you like to do?")
//     if(index === 0){

//     }
// }




// let userName = readlineSync.question('What is your name?')
// console.log(`Hello, ${userName}`)

// function Enemy(name, hp, attack){
//     this.name = name
//     this.hp = hp
//     this.attack = attack
// }

// function Player(){
//     this.name = userName
//     this.hp = hp
//     this.attack = attack
// }

// let player1 = new Player(userName, 100, 10)
// let kimK = new Enemy('Kim Kardashian', 50, 10)
// let snorlax = new Enemy('Snorlax', 75, 15)
// let mrT = new Enemy('Mr T.', 100, 20)

// const enemyies = [kimK, snorlax, mrT]

// let userName = readlineSync.question('What is your name?')
// console.log(`Hello, ${userName}`)