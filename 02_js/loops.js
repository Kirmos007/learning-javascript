// // for loop

let i;
for(i=0; i<100; i++){
    console.log(i+1);
}

// // while loop

let j = 0
while(j<100){
    console.log(j+1)
    j++
}

// for in loop

const obj = {
    name : "lobwo",
    role : "r & d",
    salary : 50000
}

for (const i in obj) {
    // if (Object.hasOwnProperty.call(object, i)) {
        console.log(`${i} key has value -> ${obj[i]}`);
        
    }


// directly accessing array values using for of loop
let arr = [5,2,3,15,10]

let maxi = -9999
for (const i of arr) {
    maxi = Math.max(maxi, i);
}

console.log(maxi);

for (const i in arr) {
    // if (Object.hasOwnProperty.call(object, i)) {
        console.log(i); 
        
    }

// for each loop

const inc =(x)=> {
    console.log(x+1)
}

arr.forEach(inc)