

// program 1
//              0         1         2       3
let names = ["chinmay","poorva","sarika","ganesh"]

// let x1 = names[0]
// let x2 = names[1]
// let x3 = names[2]
// let x4 = names[3]
// console.log(x1,x2,x3,x4)

let [x1,x2,x3,x4] = names
console.log(x1,x2,x3,x4)


// program 2 

//                0         1          2
//            0   1  2    0  1  2   0  1  2
let marks = [[11,22,33],[44,55,66],[77,88,99]]

// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])

let [[m11,m22,m33],[m44,m55,m66],[m77,m88,m99]] = marks
console.log(m55)
console.log(m88)

// program 3

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:27
}
let fn = info.firstName
let ln  = info['lastName']
let ag = info.age

console.log(fn)
console.log(ln)
console.log(ag)

let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)

let vehicle = {
    type:"sedane",
    color:"blue"
}

let {type:ty,color:cl} = vehicle
console.log(ty)
console.log(cl)


// program 4

let info2 = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}
// console.log(info2.fullName)
// console.log(info2.parent)

let {fullName:fn1,parent:{mother:mn1,father:fn2}} = info2
console.log(fn1)
console.log(mn1)
console.log(fn2)

// program 5


let students = [
    {
        fn:"chinmay",
        ln:"deshpande"
    },
    {
        fn:"amol",
        ln:"rao"
    },
    {
        fn:"sarika",
        ln:"pansare"
    }
]

let [{fn:f11,ln:l11},{fn:f22,ln:l22},{fn:f33,ln:l33}] = students
console.log(f22)
console.log(l33)

// program 

let info3 = {
    fullName:"amol rao",
    age:33,
    skills:["python","javascript","java"]
}

let {fullName:k1,age:k2,skills:[k3a,k3b,k3c]} = info3
console.log(k3a)
console.log(k3c)





















