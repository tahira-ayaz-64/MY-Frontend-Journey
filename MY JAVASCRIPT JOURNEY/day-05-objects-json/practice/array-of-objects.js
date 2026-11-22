let students = [
    {
   name :"Tahira Ayaz",
   age : 19,
   course:"Software Engineering"
    },
 {
   name :"khola Ayaz",
   age : 18,
   course:"Computer Science "
    },
    {
   name :"Lubaba Maaz",
   age : 9,
   course:"Science "
    }
]
console.log(students)

console.log(students[0].name);
console.log(students[1].name);
console.log(students[2].name);
console.log(students[0].course);
console.log(students[1].course);
console.log(students[2].course);
let jsonData =JSON.stringify(students);
console.log(jsonData);
console.log(typeof jsonData);






