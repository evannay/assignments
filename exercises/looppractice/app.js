var officeItems = ["stapler", "computer", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var compCount = 0
for(i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        compCount++;
    }
}
console.log(compCount)

var officeItems = ["stapler", "computer", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var compCount = 0
var staplerCount = 0
for(i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        compCount++
    } else if(officeItems[i] === "stapler") {
        staplerCount++
    }
}
console.log(compCount)
console.log(staplerCount)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18  && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let HIM in..")
    } else if( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18  && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " cannot see the move, dont let HIM in.")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see the movie, let HER in.")
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " cannot see the movie, don't let HER in.")
      }
    }

    