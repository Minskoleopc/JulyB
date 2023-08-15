// flat
//                 0          1           2
//              0  1  2    0  1  2    0   1  2
let numbers = [[22,33,44],[55,66,77],[88,99,100]]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
let q1 = numbers.flat()
console.log(q1)

// slice 
//              0        1     2      3        4
let names = ["chinmay","ram","sham","satish","vishal"]
//           -5       -4       -3        -2        -1
//names.slice(startPosition, endPosition(not inclusive))
console.log(names.slice(2))
console.log(names.slice(1,4))
console.log(names.slice(2,-1))
console.log(names.slice(-5,-1))
console.log(names.slice(-5,4))
console.log(names.slice(-1,-5))
// splice
//            0       1       2        3         4
let city = ["pune","nagpur","mumbai","bhopal","newyork"]
// city.pop()
// city.shift()
// city.splice(startIndex,numberoftoBedeleted)
// console.log(city.splice(1,2))
//console.log(city.splice(3,2))
city.splice(3,2,"jaipur","udaipur")
console.log(city)

// at
//              0        1       2        3
let fruits = ["apple","mango","banana","grapes"]
let f1  = fruits.at(2)
console.log(f1)

// contact 
let q2  = [44,55,66]
let q3  = [33,44,77]

let q4 = q2.concat(q3)
let q5 = q3.concat(q2)
console.log(q5)

// join 

let info = ["chinmay","deshpande",770192441]
q6 = info.join(" ")
console.log(q6)
console.log(typeof q6)

// fill
//           0  1  2  3  4  5  6
let marks = [96,95,94,93,92,91,90]
//marks.fill("whattofill","startIndex","endIndex(not niclusive)")
let q7 = marks.fill("1",3,6)
console.log(q7)

