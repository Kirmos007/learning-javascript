"use strict";

// primitive data types : 

let title = "Somrik" // string
let age = 24 // number
let working = false // boolean
let salary = null // null is a object datatype
let workId // any variable without any value is always undefined.
// symbol -> unique
// bigint -> to store severely large number

console.table([typeof(title), typeof(age), typeof(working), typeof(salary), typeof(workId)])

// non primitive data type 

let arr = [542, "is" , "Somrik's", "Roll No.", "->", true] // js arrays are also objects
let student = {  // js objects
    name : "Somrik",
    age : 24,
    working : false,
    sal : 20000,
    dateOfJoining : "3 june, 2024"
}

console.table([typeof arr, typeof student])