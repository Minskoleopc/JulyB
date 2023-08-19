let city1  = "pune"
console.log(city1)
console.log(typeof city1)
// String stores the value by index

// 0    1    2   3
// p    u    n   e

let q1 = city1.charAt(0)
console.log(q1)

let city2 = "chandrapur"
// 0   1   2   3    4    5   6   7   8    9
// c   h   a   n    d    r   a   p   u    r

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    //console.log(city2[i])
    console.log(city2.charAt(i))
}
// between between city2[i] and city2.charAt(i)


// program 2

let str1 = "mayuri"
let str2 = "katwe"
let q2 = str1.concat(str2)
let q3 = str1.concat(" ").concat(str2)
console.log(q2)
console.log(q3)

// program 3
// slice()
let city4 = "chandrapur"
//  0     1     2     3    4    5     6    7   8    9
//  c     h     a     n    d    r     a    p   u    r
// -10   -9    -8    -7   -6   -5    -4   -3   -2  -1
// city4(startIndex, endIndex(not inclusive))
console.log(city4.slice(2))
console.log(city4.slice(2,6))
console.log(city4.slice(-6,6))
console.log(city4.slice(1,-1))
console.log(city4.slice(-8,-1))
console.log(city4.slice(-1,-8))

// program4
// 0   1   2   3   4  5
// b   h   o   p   a  l
let city5  = "bhopal"
let q4 = city5.substring(1,3)
let q5 = city5.substring(0,5)
console.log(q5)

// program5 
// substr()
// 0   1   2   3   4   5 
// i   n   d   o   r    e

let city6 = "indore"
//city6.substr(startIndex,numberOfCharacter)
let q7 = city6.substr(1,2)
console.log(q7)

// program 6
//            012345
let city8  = "I am learning javascript and also learning python"
let q8 = city8.indexOf("learning")
let q9 = city8.lastIndexOf("learning")
console.log(q8)
console.log(q9)


































