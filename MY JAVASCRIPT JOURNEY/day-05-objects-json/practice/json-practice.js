let student2 = [
    {
   name:"Tahira Ayaz",
   age : 19,
   course : " Software Engineering",
   "isStudent": true
    }
];
let jsonData2 =JSON.stringify(student2);    //Convert JavaScript data into JSON string
console.log(jsonData2);
console.log(typeof jsonData2);


// JSON.parse()

let jsonData3=`{"name":"Tahira Ayaz" ,"age":19}`;

// JSON String → JavaScript

let student3 =JSON.parse(jsonData3);
console.log(student3);
console.log(student3.name);
console.log(typeof student3);


