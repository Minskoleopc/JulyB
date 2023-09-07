
let students =  [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        rollNo:30,
        skills:["python","sql","js","excel","angular"],
        city:"pune"
    },

    {
        firstName:"amol",
        lastName:"rao",
        rollNo:33,
        skills:["sql","js","oracle"],
        city:"nagpur"

    },
    {
        firstName:"poorva",
        lastName:"vyas",
        rollNo:29,
        skills:["django","python","angular"],
        city:"pune"
    },
    {
        firstName:"mayuri",
        lastName:"sorte",
        rollNo:32,
        skills:["python","sql","js","excel","html","css3"],
        city:"pune"

    }

]

console.log(students[0].lastName)

// program 1
//print firstName for all students

students.forEach(function(el){
    console.log(el.firstName)
})

// program 2
// print lastName for all students
students.forEach(function(el){
    console.log(el.lastName)
})

// program 3
// print name of student with python skill
// let q2 = students.filter(function(el){
//     return el.skills.includes("python")
// })

// console.log(q2)
// q2.forEach(function(el){
//     console.log(el.firstName)
// })
students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})

// program 4 
// name of student : number of skills 
// chinmay:4
students.forEach(function(el){
  console.log(el.firstName + ":"+el.skills.length)
})

console.log('-----------------------------')
// program5 
// user with skill python and city pune
students.forEach(function(el){
    if(el.skills.includes("python") && el.city == "pune"){
        console.log(el.firstName)
    }
})

// program 6
// add a skill prompt engineering foe every student
students.forEach(function(el){
    el.skills.push("prompt engineering")
})  
console.log(students)
console.log("Hello")














