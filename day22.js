let names = ["chinmay","ram","sarika","sham"]
let names2 = ["satish","ramesh","sameer"]
let names3 = names.concat(names2)
console.log(names3)

//                 0          1           2
//              0   1  2   0  1  2     0  1  2
let numbers = [[11,22,33],[44,55,66],[77,88,99] ,34,56]
console.log(numbers[0][0])
let q1 = numbers.flat()
console.log(q1)

//join()
let info = ["chinmay","deshpande",7709192441]
let q2 = info.join('@')
console.log(q2)
console.log(typeof q2)

// slice()
//              0       1        2        3      4
let cities = ["pune","mumbai","nagpur","jaipur","goa"]
//              -5    -4        -3       -2       -1
//cities.slice(startIndex,endIndex(not inclusive))
console.log(cities.slice(2))
console.log(cities.slice(2,4))
console.log(cities.slice(-5,4))
console.log(cities.slice(1,-1))
console.log(cities.slice(-5,-1))
console.log(cities.slice(-1,-4))

let country =  ["India","Pakistan","China"]
let q3 = country.at(1)
console.log(q3)

// splice()
//               0       1        2        3
let fruitss = ["apple","mango","grapes","chikoo"]
// fruitss.pop()
// fruitss.shift()
//fruitss.splice(startIndex, numberOfElementTobeDeleted)

//fruitss.splice(0,3)
fruitss.splice(0,3,"cheery","jackfruit","tomato")
console.log(fruitss)






















