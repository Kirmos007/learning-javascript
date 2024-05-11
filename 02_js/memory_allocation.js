// while declaring a primitive datatype, allocation is done in stack memory 
// which shares a duplicate copy while storing in another variable

let filename = "video_1.mp4"
let duplicateFilename = filename
duplicateFilename = "video_2.mp4"

console.log(filename);
console.log(duplicateFilename);


// while declaring a non primitive datatype, allocation is done in heap memory 
// which shares the original reference while copying it to another variable.

let student = {
    title : "Somrik",
    mail_id : "tsomrik007@gmail.com",
    roll : 542
}

let duplicateStudent = student
duplicateStudent.roll = 524

console.log(student);
console.log(duplicateStudent);