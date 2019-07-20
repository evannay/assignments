const readlineSync = require('readline-sync')
const options = ['Put hand in hole', 'Find the Key', 'Open the door']
haveKey = false
while(true){
index = readlineSync.keyInSelect(options, 'What action would you like to take?')
if(index === 0){
    console.log("You have died!")
    break
}else if(index === 1){
    if(haveKey === true){
        console.log("You already have the key, try something else!")
    } else {
        console.log("You have found the key")
        haveKey = true
    }
}else if(index === 2){
    if(haveKey === false){
        console.log("You need to find the key!")
    } else{
        console.log("You have escaped!")
        break
    }
}
}