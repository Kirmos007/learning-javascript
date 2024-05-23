// // by Code With Harry

// q1 -> keeps on taking values and pushing it to array untill 0 is countered

let arr1 = [1,2,3,4,5,10,20,30,35,40,12,48,50]

while(1){
    let n = Number(prompt("Enter a no from user : "))
    if(n==0) break
    arr1.push(n)
}

console.log(arr1) 


// q2 -> filters out values that are divisible by 10 

console.log(arr1.filter((item)=>{
    return (item%10==0) 
}));

// q3 -> square of each element using map function

console.log(arr1.map((item)=>{
    return item**2
}))

// q4  -> calculates factorial of n nos in array by reduce 

let n = prompt("Enter n : ");
let arr_2 = [0,0,0,0,0]
for(let i = 0; i<n; i++){
    arr_2[i] = i+1;
}

console.log(arr_2.reduce((x,y)=>{
    return x*y
}))

