// class Player{
//     constructor(name, totalCoins, status, hasStar){
//         this.name = name
//         this.totalCoins = Number(totalCoins)
//         this.status = status
//         this.hasStar = Boolean(hasStar)
//         this.gameActive = true
        
//     }
//     setName(namePicked){
//         this.namePicked = namePicked
//     }

//     gotHit(){
//         console.log('hit', this.status)
//         if(this.status === 'Powered Up'){
//             this.status = 'Big'
//         }else if(this.status === 'Big'){
//             this.status = 'Small'
//         }else if(this.status === 'Small'){
//              this.status = 'Dead'
//             console.log(this.status)
//             // if(this.status === 'Dead'){
//             //     gameActive = false
//             // }
//         }else{
//             console.log('my conditions failed')
//             console.log('current status', this.status)
//             console.log('Compare status with condition', this.status === 'Small')
//             console.log('')


//         }
//     }

//     gotPowerUp(){
//         console.log('powerup!')
//         if(this.status === 'Small'){
//             this.status = 'Big'
//         }else if(this.status === 'Big'){
//             this.status = 'Powered Up'
//         } else if(this.status === 'Powered Up'){
//             this.hasStar = true
//         }
//     }

    

//     addCoin(){
//         console.log('add coin!')
//         return this.totalCoins++
//     }

//     print(){
//         console.log(
//             `Name: ${this.name}
//              Total Coins: ${this.totalCoins}
//              Status: ${this.status}
//              Star: ${this.hasStar}`)
//     }

//     range(){
//         let range = Math.floor(Math.random() * 3)
//         // console.log('Range number: ', range)
//         if(range === 0){
//             this.gotHit()
//         }else if(range === 1){
//             this.gotPowerUp()
//         }else{
//             this.addCoin()
//         }
//         this.print()    
        
//     }
    
// }
// const newPlayer = new Player('Mario', 0, 'Small', false)
// const intervalID = setInterval(function(){
//     newPlayer.range()
//     if(newPlayer.status === 'Dead'){
//         clearInterval(intervalID)
//     }
//  }, 1000);
 

class Player{
    constructor(name){
    this.name = name
    this.totalCoins = 0
    this.status = 'Small'
    this.hasStar = false
    this.gameActive = true
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        if(this.status === 'Powered Up'){
            this.status = 'Big'
        }else if(this.status === 'Big'){
            this.status = 'Small'
        }else{
            this.status = 'Dead'
            if(this.status === 'Dead'){
                this.gameActive = false
            }
        }
    }
    gotPowerUp(){
        if(this.status === 'Small'){
            this.status = 'Big'
        }else if(this.status === 'Big'){
            this.status = 'Powered Up'
        }else{
            this.hasStar = true
            console.log(`You have a star!`)
        }
    }
    addCoin(){
     this.totalCoins++
    }
    print(){
        console.log(
            `\n Name: ${this.name}\n Status: ${this.status}\n Total Coins: ${this.totalCoins}`
        )
    }
}

const newPlayer = new Player('Mario')

function range(){
    let range = Math.floor(Math.random() * 3)
    if(range === 0){
        newPlayer.gotHit()
    } else if(range === 1){
        newPlayer.gotPowerUp()
    } else{
        newPlayer.addCoin()
    }
}



const intervalID = setInterval(function(){
    range()
    newPlayer.print()
    if(newPlayer.gameActive === false){
        clearInterval(intervalID)
    }
}, 1000)
