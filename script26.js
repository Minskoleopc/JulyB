let names = ["chinmay","shirish","sarika"]

// let q1 = names[0]
// let q2 = names[1]
// let q3 = names[2]

// console.log(q1)
// console.log(q2)
// console.log(q3)

// let [x1,x2,x3] = names
// console.log(x1)
// console.log(x2)
// console.log(x3)

let city = ["pune","banglore","chennai"]
let [c1,,c2] = city
console.log(c1)
console.log(c2)


//program 2


let states = [["pune","nagpur"],["jaipur","udaipur"],["kolkata","nagpur"]]
// console.log(states[0])
// console.log(states[1])
// console.log(states[2])

let [[c11,c22],[c33,c44],[c55,c66]] = states

// console.log(s1)
// console.log(s2)
// console.log(s3)

console.log(c33)
console.log(c66)


// program 4

let info = {
    firstName:"chinmay",
    lastName :"deshpande",
    age:34
}

console.log(info.firstName)
let q33 = info.firstName
let q34 = info.lastName
let q44 = info.age

console.log(q33)
console.log(q34)
console.log(q44)

let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)



// program 5

let Vehicle = {
    color:"red",
    type:"sedane"
}

let {color:cl,type:ty} = Vehicle
console.log(cl)
console.log(ty)


// program 6

let info2 = {
    fullName:"chinmay deshpande",
    parent:{
        father:"shirish deshpande",
        mother:"kanchan deshpande"
    }
}
// console.log(info2.fullName)
// console.log(info2.parent.father)
// console.log(info2.parent.mother)
let {fullName,parent:{father,mother}} = info2
console.log(fullName)
console.log(father)
console.log(mother)








