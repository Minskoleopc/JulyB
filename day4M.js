let x = 10
console.log(x)
console.log(typeof x)
// 12,-12,0,12.3,-12.6

let y = true 
console.log(y)
console.log(typeof y)
// true or false

let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)
// '', "",``
// "A", "a" , "1", "#", "123asA@" , " "

// comparison operator 
// entity < entity =======> boolean

console.log(typeof '10') // string
console.log(typeof 10) // number

// < , > , <= , >=
// == , !=        -------> value
// === , !==      -------> value and type 

console.log(10 == '10')
console.log(10 === '10')
console.log(10 === 10)
console.log(10 !== '10')
console.log(10 != '10') 
console.log(10 != 10)  
console.log(10 !== 10) 
console.log(8 > 4)
console.log(8 < 4)
console.log(8 >= 4)
console.log(4 <= 8)
console.log(4 >= 4)
console.log(4 <= 4)


//  Logical operator


// AND --&&

//true      &&    true    -------> true
//false     &&    true    -------> false
//true      &&    false   -------> false
//false     &&    false   -------> false

console.log(8 == 8 && 7 == 7)
console.log(8 != 8 && 7 == 7)
console.log(8 == 8 && 7 != 7)
console.log(8 != 8 && 7 != 7)


// OR -- ||


//true      ||    true    -------> true
//false     ||    true    -------> true
//true      ||    false   -------> true
//false     ||    false   -------> false


console.log(8 == 8 || 7 == 7)
console.log(8 != 8 || 7 == 7)
console.log(8 == 8 || 7 != 7)
console.log(8 != 8 || 7 != 7)


// not 

// true  ---> false
// false ---> true

console.log(!(7 == 7))
console.log(!(7 != 7))
























