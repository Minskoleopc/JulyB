// numT

// numT > 0 && numT <= 5  ======> 10 % discount
// numT > 5 && numT <= 10 ======> 20 % discount
// numT > 10              ======> 30 % discount

// if(condition){
//    // statement
// }

let numT = 17
if (numT > 0 && numT <= 5) {
    console.log("10 % discount")
}
if (numT > 5 && numT <= 10) {
    console.log("20 % discount")
}
if (numT > 10) {
    console.log("30 % discount")
}

// program 2


let numA = -17

if (numA > 0 && numA <= 5) {
    console.log("10 % discount")
}
else if (numA > 5 && numA <= 10) {
    console.log("20 % discount")
}
else if (numA > 10) {
    console.log("30 % discount")
}
else {
    console.log("incorrect value")
}


// program 3
let marks  = 22
// if(marks > 90){
//     console.log('Grade A')
// }

// if(marks > 75){
//     console.log('Grade B')
// }

// if(marks > 65){
//     console.log('Grade C')
// }

if (marks > 90) {
    console.log('Grade A')
}
else if (marks > 75) {
    console.log('Grade B')
}
else if (marks > 65) {
    console.log('Grade C')
}
else {
    console.log('Fail')
}

// program 4

let s = 8
let t = 77

if(s > t){
    console.log('s is greater')
}
else {
    console.log('t is greater')
}

// program 5
let a = 10
let b = 50
let c = 200

if( a > b && a > c){
    console.log('a is greater')
}
else if( b > a  && b > c){
    console.log('b is greater')
}
else {
    console.log('c is greater')
}














