// program 1
//                0      1       2     3
let birthYear = [1989 , 1990 , 1991 , 1992]
let ages = []
// [34,33,32,31]
console.log(birthYear[0])
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let cl = 2023 - birthYear[i] // 34
    ages.push(cl)
}
console.log(ages)


// program 2

//           0   1  2  3  4 5
let marks = [55,66,77,45,67,88]
let above60 = [] // [66]
// [66,77,67,88]
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])

    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)


// program 3
let numbers  = [11,22,33] // 66
let sum = 0


for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    sum = sum + numbers[i]
    //     0  +   11   ======> 11
    //     11 +   22   ======> 33
    //     33 +   33   ======> 66
}

console.log(sum)

// program 4
let cities = ["pune", "banglore","kolkata","chennai"]
for(let i  = 0 ; i < cities.length ; i++){
     // console.log(i)
    //console.log(cities[i])
    console.log("welcome "+cities[i])
}

