
//                0    1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    // console.log(2023 -birthYear[i])
    let cl = 2023 -birthYear[i]
    ages.push(cl)
}
console.log(ages)
// birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)


// program 2
let nums  = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let q11 = nums.map(function(el,index,arr){
    return el * 2
})
console.log(q11)


// program 3

let marks = [55,66,33,44,77]
let above50 = [] // [55,66,77]
for(let i = 0 ; i < marks.length ; i++){
    console.log(i)
    console.log(marks[i])
    if(marks[i]  > 50){
        above50.push(marks[i])
    }
}
console.log(above50)
let q2 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)

// program 4
let transactions = [-100,440,-80,100,400,-77]
let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawl)

let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)

// program 5

let mks = [11,22,33]
let total = 0
for(let i = 0 ; i < mks.length ; i++){
    total = total + mks[i]
    //       0    +   11  -------> 11
    //       11   +   22  -------> 33
    //       33   +    33 -------> 66
}
console.log(total)

let q3 = mks.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(q3)




















