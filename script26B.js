let names = ["chinmay","sarika","poorva"]

let  a = names[0]
let  b = names[1]
let  c = names[2]

console.log(a)
console.log(b)
console.log(c)

// Destructure

let [x1,x2,x3] = names
console.log(x1)
console.log(x2)
console.log(x3)

// program 2 
//              0        1         2         3
let cities = ["pune","banglore","kolkata","chennai"]
let [c1,,c3,c4] = cities
console.log(c1)
console.log(c3)
console.log(c4)

// program 3
//                  0                    1                  2
let states = [["nagpur","pune"],["jaipur","udaipur"],["indore","bhopal"]]

console.log(states[0])
console.log(states[1])
console.log(states[2])

let [[c11,c22],[c33,c44],[c55,c66]] = states
console.log(c22)
console.log(c55)

// program 4

let info = {
    firstName :"chinmay",
    lastName :"deshpande",
    rollNo:34
}

let n1 = info.firstName
let n2 = info.lastName
let n3 = info.rollNo
console.log(n1,n2,n3)

let {firstName,lastName,rollNo} = info
console.log(firstName)
console.log(lastName)
console.log(rollNo)

let vehicle = {
    color:"red",
    type:"sedane"
}
let {color:cl,type:ty} = vehicle
// console.log(color)
// console.log(type)
console.log(cl)
console.log(ty)

let info2 = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)



