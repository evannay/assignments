// function addition(num1, num2) {
//     return (num1 + num2)
// }
// console.log(addition(3, 2))

// function size(num1, num2, num3) {
//     if(num1 > num2) {
//         if(num1 > num3) {
//             return num1
//         } else {
//             return num3
//         }
//     } else if(num2 > num1) {
//         if(num2 > num3) {
//             return num2
//         }
//     } else {
//         return num3
//     }
// }
// console.log(size(3, 33, 1))


// function oddEven(num1) {
//     if(num1 % 2 === 0) {
//         return "Even"
//     }else {
//         return "Odd"
//     }
// }
// console.log(oddEven(1000))


// function characterString(string) {
//     if(string.length <= 20) {
//         return string + string
//     } else {
//         let halfString = string.length / 2
//         let newString  = string.slice(0, halfString)
//         return newString
//     }
// }
// console.log(characterString("Thisthisthisthisthisthisthiss"))

// function fib(n) {
//     const nfib = []
//     for (i = 0; i < n; i++) {
//         (nfib[i] = nfib[i - 1] + nfib[i - 2])
//     }
// }

// console.log(fib(8))