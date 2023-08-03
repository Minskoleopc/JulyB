// intialization 

// while(condition){
    // statements

    // increment / decrement
// }

// program 2
// print hello 3 times

let t1 = 1
while(t1 <= 3){
    console.log("hello") // "hello" , "hello" , "hello"
    t1 ++ // 2 // 3 // 4
}

// program 3

// print 1 to 3
let t2 = 1
while(t2 <= 3){
    console.log(t2) // 1 // 2 // 3
    t2 ++  // 2 // 3 // 4
}

// program 4
// print 1 to 5
let t3 = 1
while(t3 <=5){
    console.log(t3)
    t3 ++
}

// program 5
// print 5 to 1

let t4 = 5
while(t4 >= 1){
    console.log(t4) // 5 // 4 // 3 // 2 // 1
    t4 -- // 4 // 3 // 2 // 1 // 0
}


// program 6
// table of 2

let t5 = 2
while(t5 <= 20){
    console.log(t5) // 2 // 4 ------ 20
    t5 = t5 + 2 // 4 // 6  --------- 22 
}

// program 7
// table of 5 in reverse

let t6 = 50
while(t6 >= 5){
    console.log(t6) // 50 // 45 ------------5
    t6 = t6 -5  // 45 // 40  ---------- 0
}


// program 8 
// break with while loop


let t7 = 5
while(t7 >= 1){
    if(t7 == 3){
        break
    }
    console.log(t7) // 5 // 4
    t7 -- // 4 // 3
}

let t8 = 1
while(t8 <= 5){
    console.log(t8)  // 1 // 2 // 3
    if(t8 == 3){
        break
    }
    t8 ++ // 2 // 3
}


let t9 = 1
while(t9 <= 5){
    if(t9 == 3){
        continue
    }
    console.log(t9)
    t9 ++
}























