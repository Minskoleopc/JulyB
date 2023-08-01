

// program 1
// switch case without break statement 

let city  = "Bhopal"
switch(city){
    case "pune":
        console.log("MH")
    case "bhopal":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("incorrect city name")

}

// program 2 
// switch case with break statement 

let city2 = "udaipur"

switch(city2){
    case "pune":
        console.log("MH")
        break
    case 'bhopal':
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name")
}
// program 3 
// switch case with multiple case and same output

let city3 = "pune"
switch(city3){
    case "nagpur":
    case "pune":
        console.log("MH")
        break;

    case "bhopal":
    case "indore":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name")

}

// program 4
// switch to find the greatest of all 3 numbers


let x = 100000
let y = 50000
let z = 300
let flag = true

// if(x > y && x > z){
//     console.log("x is greater")
// }
// else if(y > x && y > z){
//     console.log('y is greater')
// }
// else {
//     console.log("z is greater")
// }


switch(flag){
    case x > y && x > z:
        console.log("x is greater")
        break
    case y > z && y > x:
        console.log("y is greater")
        break
    default:
        console.log("z is greater")


}

