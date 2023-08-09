
// program 1
let birthYear = [2000, 2001, 2002, 2003]
// [23,22,21,20]
let q1 = birthYear.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)

// program 2
let marks = [55, 66, 22, 33, 44, 55, 66, 77]
// [55,66,44,55,66,77]
let q2 = marks.filter(function (el, index, arr) {
    return el > 50
})
console.log(q2)

// program 3

let arr = [11,22,33]
let q3 = arr.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(q3)

// program 4
//              0       1         2         3
let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5

//                  0    1  2  3 4  5
let transactions = [44,-55,22,33,45,-5]
// [-55,-5]
let q4 =transactions.filter(function(el){
    return el < 0
})
console.log(q4)

let q5 =transactions.find(function(el){
    return el < 0
})
console.log(q5)

let q6 =transactions.findIndex(function(el){
    return el < 0
})
console.log(q6)


let d = [11,22,33,44,55,232,33,44,55,666]
let q7 = d.every(function(el,index,arr){
    return el > 100
})
console.log(q7)


let e = [11,22,33,44,55,232,33,44,55,666]
let q8 = e.some(function(el,index,arr){
    return el > 1000
})
console.log(q8)


// map() - array
// filter() - array 
// reduce() - value
// forEach() - undenfined
// find() - first occurence
// findIndex() - index value of first occurence
// every() - boolean
// some() - boolean()


















