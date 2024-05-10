var a = 5
function diff() { 
    let x = 5
    let y = 3
    return a-y; // instead of x we can use a since its declared with var keyword which identifies it as global variable
}

console.log("The subtraction of 2 from 5 is : ", diff())
// console.log(x) -> we cant access x since its declared with let  keyword which identifies it as inblock variable

const b = 6
// b = 4  -> constant variable cant be changed throughout the program once declared
console.log(b)
