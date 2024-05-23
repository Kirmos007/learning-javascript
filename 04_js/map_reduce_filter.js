const arr = [12,14,16,18,20]

// for each performs a opearation for an array but does not create new array
// arr.forEach((x)=>{ 
//     console.log(x+1)
// })

console.log(arr)

const inc=(x)=>{
    return x+1;
}

console.log(arr.map(inc));  // map creates a new array
// console.log(arr);

const select_nos=(x)=>{
    return x>15;
}

console.log(arr.filter(select_nos)); // creates a new array by filtering out elements of an array based on some function

const sum=(x,y)=>{
    return x+y;
}

console.log(arr.reduce(sum)); // peforms an operation by taking some part of array at a time