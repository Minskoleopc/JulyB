// String -- object --- properties and method


let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)


// Object  -  properties and method
let city = "pune"
console.log(city.length)


let city2 = "nagpur"
let q1 = city2.toUpperCase()
console.log(q1)

let city3 = "Wardha"
let q2 = city3.toLowerCase()
console.log(q2)

let city4 = "jaipur"
let q3 = city4.startsWith('j')
let q4 = city4.startsWith('J')
let q5 = city4.startsWith('jai')
console.log(q3)
console.log(q4)
console.log(q5)


let city5 = "udaipur"
let q6 = city5.endsWith('r')
let q7 = city5.endsWith('pur')
let q8 = city5.endsWith('R')
console.log(q6)
console.log(q7)
console.log(q8)

let city6 = "lucknown"
let q9  =city6.includes("k")
let q10  =city6.includes("K")
let q11  =city6.includes("know")
console.log(q9)
console.log(q10)
console.log(q11)

let city7 = "jaipur"
// 0    1    2   3  4    5
// j    a    i   p   u   r

let q12 = city7.indexOf("i")
let q13 = city7.indexOf("I")
console.log(q12)
console.log(q13)

let info = "I am learning javascript"
let r1 = info.replace("javascript","python")
console.log(r1)


let city8 = " goa "
console.log(city8.length)
let q14 = city8.trim()
console.log(q14.length)


let city9 = " goa "
console.log(city9.length) // 5
let q15 = city9.trimStart()
console.log(q15.length) // 4


let city10 = "goa "
console.log(city10.length) //  4
let q16 = city9.trimEnd()
console.log(q16.length) //  3


















