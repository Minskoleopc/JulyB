
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for(intialization ; conditionCheck ; increment/decrement){
    // statements
//}

// program print 1 to 100
for(let i = 0 ; i <= 100 ; i++){
    console.log(i)
}

// program to print 0 to 3

for(let i = 0 ; i <= 3 ; i++){ // 1 // 2 // 3 // 4
    console.log(i) // 0 // 1 // 2 // 3
}

// print 1 to 5
for(let i = 1 ; i <=5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
}

// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// print table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 ----------- 22
    console.log(i) // 2 // 4 ------------- 20
}

// table of 5 in reverse

for(let i = 50 ; i >= 5 ; i = i-5){ // 45 // 40  -------------- 0
    console.log(i) // 50 // 45  ------------5
}


// break statement with for loop



for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 1 // 2
}

for(let i = 1 ; i <= 5 ; i++){    // 2 // 3
    console.log(i)   // 1  // 2 // 3
    if(i == 3){
        break
    }
}
for(let i = 5 ; i >= 1 ; i--){ //4 // 3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}

// continue with for
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if(i == 3 || i == 4){
        continue
    }
    console.log(i) //1 // 2 // 4 // 5
}










// continue statement with for loop




















// while()