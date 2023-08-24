

// map() , filter() , reduce() , forEach() , every() , some() , find() , findIndex()

let birthYear = [1989,1990,1991,1992]
let ages = []
// [34,33,32,31]

for(let i = 0  ; i < birthYear.length ; i++){
    console.log(i)
    console.log(birthYear[i])
    console.log(2023 - birthYear[i])
    let cl  = 2023 - birthYear[i]
    ages.push(cl)
}
console.log(ages)

//birthYear = [1989,1990,1991,1992]
let q2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q2)

// program 2
let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]

let q3 = numbers.map(function(el){
    return el * 2
})
console.log(q3)


// program 3

let marks = [11,22,34,56,44,55,77,88,12]
let above50 = []

for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}


console.log(above50)
let q4 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)

let transactions = [33,55,66,-19,56,77,-22,-99,899]





let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)
let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawl)

// program 4

let  mks = [11,22,33]
let total = 0

for(let i = 0 ; i < mks.length ; i++){
    total = total + mks[i]
    //       0    +   11   =======> 11
    //       11   +   22   =======> 33
    //       33   +   33   =======> 33
}
console.log(total)

let q6 = mks.reduce(function(acc,el,index,arr){
    return acc + el // 33
},5)
console.log(q6)















