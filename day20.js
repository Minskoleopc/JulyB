// map() , filter() , reduce() , forEach(), find() , findIndex() , every() , some()

let numbers = [11,22,33,44,55,66,77,88,99]
// [12,23,34,45,56,67,78,89,100]
let q1 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(q1)

// program 2
let marks = [44,55,22,33,44,55,66]
// [55,55,66]
let q2 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)

//program 3

let nums = [11,22,33]
let q3 = nums.reduce(function(acc,el,index,arr){
    return acc + el  // 66
},0)
console.log(q3)


// program 4
let cities = ["pune","banglore","kolkata"]
let q4 = cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q4)

// program 5 find()
//         0  1  2  3   4  5
let mks = [23,44,55,66,77,88]

let q5 = mks.filter(function(el,index,arr){
    return el > 60
})
console.log(q5)

let q6 = mks.find(function(el,index,arr){
    return el > 60
})
console.log(q6)

// program 6 findIndex()
let q7 = mks.findIndex(function(el,index,arr){
    return el > 60
})
console.log(q7)

// program 7 every()
let e1 = [33,44,66,33,44,55,66,88]
let q8 = e1.every(function(el,index,arr){
    return el > 35
})
console.log(q8)

// program 8 every()
let q9 = e1.some(function(el,index,arr){
    return el > 820
})
console.log(q9)
















