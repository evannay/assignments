// function sum(x, y){
//     try{
//         if(typeof x === 'string'){
//             throw "WRONG"
//         } else if(typeof y === 'string'){
//             throw "WRONG"
//         } else {
//             console.log("All good")
//         }
//     } catch(err) {
//         console.log(err)
//     }finally{
//         console.log("Runs no matter what")
//         console.log(`input was ${x} and ${y}`)
//     }
//     return x + y;
//   }
//   sum('3', 5)

//   var input = "";

// try {
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }


var user = {username: "sam", password: "123abc"};
function login(username, password){
    try{}
  if(username !== "sam" && password !== "123abc"){
  return "Login successful"
}
}
console.log(login("sam", "123abc"))