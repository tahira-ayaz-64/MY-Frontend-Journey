let student = {
    name: "Tahira Ayaz",
    age: 19,
    course: "Software Engineering",
    isStudent: true,

    // Methods Inside Objects

    greet: function() {
        console.log("Hello! My name is " +this.name);
    }
};

student.greet();
student.greet();
console.log(student);
console.log(student.name);  // . property for notation
console.log(student["course"]);   // bracket notation

student.age = 21;   // UPDATE 
student.city = "Mirpur";   // ADD 
delete student.isStudent;  // delete
console.log(student);


