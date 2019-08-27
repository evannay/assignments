const readlineSync = require('readline-sync')

let userName = readlineSync.question("You wake up dazed. . . you try to remember how much you had to drink.  You're angry at yourself, then again, that's tequila for you . . . you remember your name at least: ")
console.log(`Thats, right . . . you are ${userName}, the child of Odin.  You find yourself in the gladiator arena.  Defeat all 7 challengers to regain the freedom you once had. But beware, one of your enemies is a true gladiator and can't wait to pillage your corpse.`)

function Player(userName, hp, attack){
    this.name = userName
    this.hp = hp
    this.attack = attack
}

const player1= new Player(userName, 100, 30)


function Enemy(name, hp, attack){
    this.name = name
    this.hp = hp
    this.attack = attack
}

const kimK = new Enemy('Kim Kardashian', 50, 15)
const snorlax = new Enemy('Snorlax', 55, 14)
const mrT = new Enemy('Mr. T', 60, 15)
const bGuy = new Enemy("The bad guy", 65, 15)
const spartacus = new Enemy("Spartacus", 90, 30)
const jeremy = new Enemy("Jeremy", 45, 10)
const wolverine = new Enemy("Wolverine", 50, 15)



const enemies = [kimK, snorlax, mrT, bGuy, spartacus, wolverine, jeremy]

let inventory = []
let hasWon = false

const options = ['dance around the arena', 'check inventory', 'check player status']

while(player1.hp > 0 && !hasWon){
    let action = readlineSync.keyInSelect(options, "What would you like to do, warrior?")
    if(action === 0){
        dance()
    } else if(action === 1){
        checkInventory()
    } else {
        console.log(player1)
    }
}

function checkInventory(){
    console.log(inventory)
}

function dance(){
    let random = Math.floor(Math.random() * 4)
    if(random < 3){
        console.log("You dance around, taunting, but no challenger approaches!")
    } else {
        console.log("A challenger approaches, ready yourself!")
        encounter()
    }
}

function encounter(){
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]
    console.log(`Your challenger, ${enemy.name}, approaches. . . blood will be spilt this day . . . `)
    let action = readlineSync.keyIn('How do you respond? Run [r]? or fight this spawn of Satan [f]?', {limit: 'rf'})
    if(action === 'r'){
        if(player1.hp > 50){
            console.log("You have run like the pus- er. . . pansy that you are.")
        } else {
            console.log("You cannot run, pansy, you are injured to the point of one last dance. . . ")
            fightLoop(enemy)
        }
    } else {
        console.log("Brave . . . but foolish.")
        fightLoop(enemy)
    }
}

function fightLoop(enemy){
    while(player1.hp > 0 && enemy.hp > 0){
        let enemyAttack = generateAttack(enemy)
        let playerAttack = generateAttack(player1)
        player1.hp -= enemyAttack
        console.log(`${enemy.name} lunges forward, attacking for ${enemyAttack} damage! You have ${player1.hp} hp remaining`)
        enemy.hp -= playerAttack
        console.log(`You respond in kind, the crowd roars! You deal ${playerAttack} damage, ${enemy.name} has ${enemy.hp} hp left.`)
    } if(player1.hp <= 0){
        console.log("You have died, GAME OVER")
    } else {
        console.log(`You defeated ${enemy.name} in the most horrific way, well done.`)
        enemies.splice(enemies.indexOf(enemy), 1)
        let healthGain = Math.floor(Math.random() * 35)
        player1.hp += healthGain
        console.log(`You have regained ${healthGain} health for your victory!`)
    } if(enemies.length === 0){
        console.log("You have defeated all challengers in the arena, masterfully done.")
        hasWon = true
    }
}

function generateAttack(player){
    return Math.floor(Math.random() * player.attack)
}

function generateSwordAttack(player){
    return Math.floor(Math.random() * (player.attack) + 5)
}

function swordFightLoop(){
    while(player1.hp > 0 && enemy.hp > 0){
        let enemyAttack = generateAttack(enemy)
        let playerAttack = generateSwordAttack(player1)
        player1.hp -= enemyAttack
        console.log(`${enemy.name} lunges forward, attacking for ${enemyAttack} damage! You have ${player1.hp} hp remaining`)
        enemy.hp -= playerAttack
        console.log(`You respond in kind, the crowd roars! You deal ${playerAttack} damage, ${enemy.name} has ${enemy.hp} hp left.`)
    } if(player1.hp <= 0){
        console.log("You have died, GAME OVER")
    } else {
        console.log(`You defeated ${enemy.name} in the most horrific way, well done.`)
        enemies.splice(enemies.indexOf(enemy), 1)
        let healthGain = Math.floor(Math.random() * 35)
        player1.hp += healthGain
        console.log(`You have regained ${healthGain} health for your victory!`)
    } if(enemies.length === 0){
        console.log("You have defeated all challengers in the arena, masterfully done.")
        hasWon = true
    }
}
function bossBattle(){
    while(player1.hp > 0 && boss.hp > 0){
        let bossAttack = generateAttack(boss)
        let playerAttack = generateAttack(player1)
        player1.hp -= bossAttack
        console.log(`${boss.name} lunges forward, attacking for ${bossAttack} damage! You have ${player1.hp} hp remaining`)
        enemy.hp -= playerAttack
        console.log(`You respond in kind, the crowd roars! You deal ${playerAttack} damage, ${enemy.name} has ${enemy.hp} hp left.`)
    } if(player1.hp <= 0){
        console.log("You have died, GAME OVER")
    } else {
        console.log(`You defeated ${boss.name} in the most horrific way, well done.`)
        bosses.splice(bosses.indexOf(boss), 1)
        let healthGain = Math.floor(Math.random() * 35)
        player1.hp += healthGain
        console.log(`You have regained ${healthGain} health for your victory!`)
    } if(bosses.length === 0){
        console.log("You have defeated all challengers in the arena, masterfully done.")
        hasWon = true
    }
}