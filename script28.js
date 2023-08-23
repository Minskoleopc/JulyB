// program 1
let names =  ["poorva","sarika","sham"]
let [q1,q2,q3] = names
console.log(q1)
console.log(q2)
console.log(q3)

// program 2
//              0           1          2
//            0  1  2    0  1  2   0  1  2
let marks = [[11,22,33],[44,55,66],[77,88,99]]

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])

let [[m11,m22,m33],[m44,m55,m66],[m77,m88,m99]] = marks

// console.log(m1)
// console.log(m2)
// console.log(m3)

console.log(m11)
console.log(m22)
console.log(m33)

console.log(m44)
console.log(m55)
console.log(m66)

console.log(m77)
console.log(m88)
console.log(m99)


// program 3

let info = {
    firstName :"chinmay",
    lastName:"deshpande",
    age:12
}

let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)

let vehicle = {
    color:"red",
    type:"sedane"
}
let {color:cl, type:ty} =vehicle
console.log(cl)
console.log(ty)

// program 5 


let students = [
    {
        firstName:"chinmay",
        lastName :"deshpande"
    },
    {
        firstName:"sarika",
        lastName :"pansare"

    },
    {
        firstName:"laxman",
        lastName :"rai"
    }
]
let [
    {firstName:fn1,lastName:ln1},
    {firstName:fn2,lastName:ln2},
    {firstName:fn3,lastName:ln3}
] = students
console.log(ln3)
console.log(fn2)

// program 5

let info3 = {
    fullName:"chinmay deshpande",
    skills:["python","html", "css"]
}

let {fullName,skills:[sk1,sk2,sk3]} = info3
console.log(sk1)
console.log(sk2)
console.log(sk3)