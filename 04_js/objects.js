// js objects

// singleton object

// const obj1 = new Object()
// console.log(obj1)

// not a singleton

// const obj2 = {}
// console.log(obj2);

const obj3 = {
    title : "Rik",
    age : 23,
    role : "SE 1",
    company : {
        title : "Rebuscode",
        id : 542,
        location : "Kolkata",
        callbyit : function call() {
            console.log(`hey by ${this.title}`);
        }

    },
    callhim : function call() {
        console.log(`hey ${this.title}`)
    } 
}

const obj4 = {
    sirname : "Tapaswi",
    loggedIn : true
}

// console.log(`${obj3.title} works in a company called ${obj3.company.title}`)

// easy way to expand and concatenate 2 objects
// console.log({...obj3, ...obj4});

// another way of assigning two or more objects in a target object
// console.log(Object.assign({}, obj3, obj4))


const obj5 = {...obj3, ...obj4}

// if(obj5.loggedIn === false) // triple equals check not only the value but also the datatype
// {
//     console.log(`${obj5.title} has not logged in yet`);
//     // obj5.loggedIn = true
// } 
// else{
//     console.log(`${obj5.title} has successfully logged in`);
// }

// console.log(obj5.company.id);

// console.log(obj5.company.callbyit);
// console.log(obj5.callhim);

// console.log(`The keys of obj5 are ${Object.keys(obj5)}`);
// console.log(`The values of obj5 are ${Object.values(obj5)}`);
// console.log(`The key and values of obj5 are ${Object.entries(obj5)}`);

// const {sirname : lastname} = obj5 // de-structuring of objects

// console.log(lastname);

// array of objects

// const course = [{title:"js", id: 101, tutor : "Hitesh"}, {title: "c++", id:102, tutor : "Raj"}, {title: "java", id:103, tutor : "Biswajit"}]

// for (const i in course) {
//         console.log(course[i].tutor);        
//     }

// for (const i of course) {
//     console.log(i.tutor);
// }

// json structure

// {
//     "name" : "somrik",
//     "class" : 12,
//     "roll" : 542
//     "course" : "Maths"
// }
