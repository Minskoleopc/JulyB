// intialization 
// while(condition){
    // statement
    // increment / decrement
//}


// program 1
// print "hello"  3 types

// for(let i = 1 ; i <= 3 ; i++ ){ //2 //3 //4
//     console.log("hello")
// }

let t1 = 1
while(t1 <= 3){
    console.log("hello")
    t1 ++
}

//program 2 1 to 3
let t2 = 1
while(t2 <= 3){
    console.log(t2)
    t2 ++
}

// program 3 1 to 5

let t3 = 1
while(t3 <= 5){
    console.log(t3)
    t3 ++
}

// program 4 5 to 1
let t4 = 5
while(t4 >= 1){
    console.log(t4) // 5 // 4 // 3 // 2 // 1
    t4 -- // 4 // 3 // 2 // 1 // 0
}

// program 6 table of 2
let t5 = 2
while(t5 <= 20){
    console.log(t5)
    t5 = t5 + 2;
}

// program 7 table of 5 in reverse
let t6 = 50
while(t6 >= 5){
    console.log(t6)
    t6 = t6 - 5
}

// program 8
// break with while

let t7 = 1
while(t7 <= 5){
    if(t7 == 3){
        break
    }
    console.log(t7) //1 // 2
    t7 ++ // 2 // 3
}

// program 9
let t8 = 5
while(t8 >= 1){
    console.log(t8) // 5 // 4 // 3
    if(t8 == 3){
        break;
    }
    t8 -- // 4 // 3
}

// program 10


let t9 = 1
while(t9 <= 5){
    if(t9 == 3){
        t9 ++ // 4
        continue
    }
    console.log(t9) // 1 //2 // 4 // 5
    t9 ++ // 2 // 3 // 5 // 6
}






















