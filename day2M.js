// variables 


// let and const

// program 1
let x = 10
console.log(x)
x = 500
console.log(x)

// program 2

const y = 30
console.log(y)
//y = 900

// program 3
let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)


let q = 8
let r = 4

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

// 10 pair --- 50 lines (DRY)

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(6,3)
Calculator(8,4)
Calculator(9,3)


// function without parameter and without return type
function addA(){
    console.log(8+8)
}
addA()
addA()
addA()
addA()

// function with parameter and without return 
function addB(x,y){
    console.log(x+y)
}
addB(12,3)
addB(120,30)

// function with parameter and with return type 
// 100 - Show
// 100 - Given

function addC(x,y){
    return x+y
}
let q1 = addC(12,9)
console.log(q1)
console.log(q1 + q1)
console.log(q1 / 7)
console.log(q1 * 0.10)

// 7:30 pm














