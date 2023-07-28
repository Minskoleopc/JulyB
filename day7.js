
let a = 1000
let b  = 50
if(a > b){
    console.log('a is greater')
}
else {
    console.log('b is greater')
}
// ternary operator
a > b ? console.log('a is greater'):console.log('b is greater')

// program2
let age = 17
let q2 = age >= 18 ? "candrive":"cannot drive"
console.log(q2)

// switch
// switch case without break statement

// let city = "indore"
// switch(city){
//     case "pune":
//         console.log("MH")
//     case "jaipur":
//         console.log("RJ")
//     case "indore":
//         console.log("MP")
//     default:
//         console.log('Incorrect city name')
// }
// program 4
// switch  case with break statement


// let city2 = "indore"
// switch(city2){
//     case "pune":
//         console.log("MH")
//         break
//     case "jaipur":
//         console.log("RJ")
//         break
//     case "indore":
//         console.log("MP")
//         break
//     case "surat":
//         console.log("GJ")
//         break
//     default:
//         console.log('incorrect cityname')
// }

// program 3
let city3 = "pune"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "surat":
    case "Ahemedabad":
        console.log("GJ")
        break
    default:
        console.log('incorrect cityname')
}

// program 4
let x = 100
let y = 450
let z = 50000

let flag = true

switch(flag){
    case  x > y && x > z:
        console.log("x is greater")
        break
    case y > x && y > z:
        console.log("y is greater")
        break
    default:
        console.log("z is greater")

}



























