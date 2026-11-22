// DAY 05 MINI PROJECT ABOUT student RECORD VIEWER

let STUDENTS= [
    {
        id:1,
        name:"Tahira Ayaz",
        course : "Software Engineering",
        isStudent:true

    },
    {
        id:2,
        name:"Khola Ayaz",
        course : "Computer Science",
      isStudent:true

    },
     {
        id:3,
        name:"Lubaba Maaz",
        course : "Biology",
        isStudent:true

    },
     {
        id:4,
        name:"Immama Maaz",
        course : "Lawyer",
        isStudent:true

    },
];
console.log(STUDENTS);
console.log(STUDENTS[1]);
console.log(STUDENTS[2].name);
console.log(STUDENTS[3].course);

let jsonSTUDENTS = JSON.stringify(STUDENTS);
console.log(jsonSTUDENTS);
console.log(typeof jsonSTUDENTS);

let originalSTUDENTS = JSON.parse(jsonSTUDENTS);
console.log(originalSTUDENTS);
console.log(originalSTUDENTS[0].name);
console.log(typeof originalSTUDENTS);

STUDENTS.forEach(function(student) {

    console.log("Student ID: " + student.id);
    console.log("Student Name: " + student.name);
    console.log("Student Course: " + student.course);
    console.log("Is Student: " + student.isStudent);

    console.log("----------------------");

});