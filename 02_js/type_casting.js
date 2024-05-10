let score = 10
let score2 = 0
console.log(String(score)) // returns string having a value "10"
console.log(Boolean(score)) // returns true since it does not contain 0

console.log(String(score2))
console.log(Boolean(score2)) // returns false since score2 contained 0

let title = "Somrik007"
let title2 = ""
console.log(Number(title)) // converted successfully but returns NaN(Not a Number) when string is converted to number
console.log(Boolean(title)) // returns true since string title does not contain 0
console.log(Boolean(title2)) // returns false since title2 is a empty string 

let t = true
let f = false
console.log(Number(t), Number(f)) // true is converted as 1 and false is converted as 0
console.log(String(t)[0], String(f)[0]) // gets converted into string as "true" & "false"

let n = null;
let u = undefined; // another way to state a variable as undefined
let u2; // way to declare undefine variable
console.log(Number(n), Number(u), Number(u2)); // null as 0 and undefined as NaN 
console.log(String(n)[0], String(u)[0], String(u2)[0]); // gets converted into string as "null" and "undefined"
