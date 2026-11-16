// Array practice 

let subjects = ["Maths", "Chemistry", "Computer", "English", "Physics"];
console.log(subjects[0]);
console.log(subjects[2]);
subjects[2] = "Programming";
console.log(subjects);

//  Array Length

let cities=["Abbaspur","Hajira","Rawalakot","Mirpurr","Kotli"];
console.log(cities.length);
console.log(cities[cities.length-1]);

//Array Methods — push() and pop()

let shoppinglist=["Milk","Bread","Eggs"];
shoppinglist.push("butter");
shoppinglist.pop();
console.log(shoppinglist);

//shift() and unshift()

let STUDENTS=["ALI","AHMED","SARA","SAAD"];
STUDENTS.unshift("TAHIRA");
STUDENTS.shift();
console.log(STUDENTS);

  // includes() and indexOf()

  let subject=["MATHS","Chemistry","PHYSICS","Computer"];
  console.log (subject.includes("Computer"));
  console.log (subject.includes("BIOLOGY"));
  console.log(subject.indexOf("Chemistry")); 2
  console.log(subject.indexOf("MATHS")); 

// slice() Method

let subjects = ["Maths", "English", "Computer", "Physics", "Chemistry"];
let selectedsubjects = subjects.slice(1,4);
console.log(  selectedsubjects);
 console.log (subjects);

 // Mutation vs Immutability
 let color=["Red","Orange","Yellow","White","Black"];
 color.push("Pink");
 console.log(color);
 let selectedcolors=color.slice(0,2);
 console.log(selectedcolors);

 // Spread Syntax (...)

 let subjects = ["Maths", "English", "Computer"];
 let newsubjects=[...subjects ];
 newsubjects.push("Physics");
console.log(subjects);
console.log(newsubjects);


// forEach() Method  (print seperately)

let fruits = ["Apple", "Mango", "Banana", "Orange"];   
fruits.forEach (function(name,index)
{
    console.log(name,index);

}
)
// task 02 of for each 

let subjects = ["Maths", "English", "Computer", "Physics", "Chemistry"];
subjects.forEach(function(name,index)
{
console.log(name,index);
}
)
// map() Method (funtion performed at each element)

let numbers = [2, 4, 6, 8];
let doubled =numbers.map(function(num)
{
    return num*num;
}
)
console.log(doubled);

// filter() Method (it selects only those elements from array which satisfy condition)
let NumberS= [5, 12, 8, 20, 3, 15, 25, 7];
let Result=NumberS.filter(function(num)
{
    return num>10;
}
)
console.log(Result);

// task 02 of filter method 


let marks = [45, 80, 32, 90, 65, 25];
let Results=marks.filter(function(num)
{
    return num>50;
}
)
console.log(Results);

// Arrays Practice Exercises

let favoriteFoods =["Pizza","Pasta","Chay","Pakora","daal , chawal"];
favoriteFoods.push("half fry egg");
favoriteFoods.shift();
console.log(favoriteFoods);


