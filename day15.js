// program 1
//                  0    1    2   3
let birthYear =  [1989,1990,1991,1992]
let ages = []  // [34,33]
// [34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let cl = 2023 - birthYear[i]
    ages.push(cl)
}
console.log(ages)

// program 2 // filter
let marks = [22,33,55,22,33,44,55,67,78]
let above50 = [] // [55]
// [55,55,67,78]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])

    if(marks[i] > 50){
        above50.push(marks[i])
    }

}
console.log(above50)

// program 3
//             0  1   2
let numbers = [11,22,33] //  66
let sum = 0

for(let i  = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    sum = sum + numbers[i]

    //     0  +    11    ======> 11
    //     11 +    22    =======> 33
    //     33 +     33   =======> 66 
}
console.log(sum)


// program 4
//             0       1          2         3
let city = ["pune","banglore","kolkata","chennai"]
for(let i = 0 ; i < city.length ; i++){
    console.log("welcome "+ city[i])
}





 



