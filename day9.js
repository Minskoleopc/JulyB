console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


// program 1
//for(intialization ; conditionCheck ; increment/decrement){
// statement
//}

// print "hello"  tyms 
for (let i = 1; i <= 3; i++) { // 2 //3 // 4
    console.log("hello") // "hello" , "hello" , "hello"
}

// program  to print 1 to 3
for (let i = 1; i <= 3; i++) { //2  // 3 // 4
    console.log(i) //1  // 2 // 3
}

// program to print  1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// program to print  5 to 1
for (let i = 5; i >= 1; i--) {
    console.log(i)
}
// program to print table of 2

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}
// program to print table 5 in reverse

for (let i = 50; i >= 5; i = i - 5) {
    console.log(i)
}

// for with break statement 

for (let i = 1; i <= 5; i++) {  // 2 // 3
    if (i == 3) {
        break
    }
    console.log(i)  // 1 // 2

}

for (let i = 1; i <= 5; i++) {  //2 //3
    console.log(i)  // 1 //2 //3
    if (i == 3) {
        break
    }
}


for (let i = 5; i >= 1; i--) { // 4 // 3
    console.log(i) // 5 // 4 // 3
    if (i == 3) {
        break
    }
}

// continue with for 

for (let i = 1; i <= 5; i++) { // 2 //3 // 4 // 5 // 6
    if (i == 3) {
        continue
    }
    console.log(i) // 1 // 2 //4 // 5
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 //1 // 0
    if(i == 3){
        continue
    }
    console.log(i) /// 5 // 4 // 2 // 1
}






























