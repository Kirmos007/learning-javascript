let num = -6.555

// console.log(num.toFixed(1)); // rounds off with fixed no of values after decimal
// console.log(typeof num.toLocaleString()) // converts number to string
// console.log(num.toPrecision(3)) // rounds off to precision by keeping no of digits before and after decimal as specified
// console.log(typeof num.toString()) // converts the number to string
// console.log(num.toExponential()) // represents the no in exponential form

// console.log(Math.abs(num)) // returns absolute value after a operation
// console.log(Math.round(num)) // rounds of a number
// console.log(Math.sqrt(Math.abs(num))) // returns square root of a no
// console.log(Math.max(5,6,3,4,10))
// console.log(Math.min(5,6,3,4,10))
// console.log(Math.pow(num,2));


// using random function from math to create games like dice others where we need to generate nos b/w given range
// generate nos from 1 to 10

let high = 20
let low = 10
// console.log(Math.floor((Math.random()*10))+1) // rule to generate nos from 1 to 10
console.log(Math.floor(Math.random()*10) + (high-low+1)) // rule to generate nos between a range 

// using math functions to get max and min elements of an array

// let arr = [5,2,30,1,10]
// let n = arr.length
// let maxi = -9999
// let mini = 9999
// for(let i=0; i<n; i++){
//     maxi = Math.max(maxi,arr[i])
//     mini = Math.min(mini,arr[i])
// }

// console.log(maxi);          
// console.log(mini);

// Explore other Math module functions as well with time