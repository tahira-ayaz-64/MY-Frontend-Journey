// Functions 


function greet(){
    console.log("WELCOME TO MY JAVASCRIPT JOURNEY.");
}
greet();
greet();
greet();

// Parameters and Arguments

function studentInfo(name,course){
    console.log("student Name :" +name);
    console.log("Resgistered course " +course);
}
studentInfo("Ali","computer");
studentInfo("Ahmed","Linear Algebra");

//  Default Parameters


function studentProfile( name ="unknown" ,course ="not selected")
{
      console.log("Name "+name );
      console.log("Course "+course);
}
 studentProfile("Tahira" ,"Algebra");
 studentProfile("Khola");
 studentProfile();

   // return vs console.log()
 
   function calculateTotal(price,quantity){
    let  Result = price*quantity;
    
     return Result;
}
let total = calculateTotal(10,15);
console.log("Result = "+total);

// calculate Area by using return 

function  calculateArea(length,width){
   let area=length*width;
   return area;
}
let totalarea=calculateArea(10,20);
console.log("area = "+ totalarea );

// Function Expression

const multiply =function(a,b){
    let Result =a*b;
    return Result;
}
let answer = multiply(5,8);
console.log("Result = "+ answer);


// Multiply Arrow Function

const Multiply= (a,b)=>{
    return a*b;
}
console.log(Multiply(4,5));



const subtract = (a,b) =>
{
    return a-b;
}
console.log(subtract(15,5));

// Hoisting Test

welcome();
function welcome(){
    console.log(" Welcome to JAVASCRIPT");
}

// Practice task 
greetstudents();
function greetstudents(){
    console.log("Welcome Students");
    
}

//  Global Scope

let studentname ="Tahira Ayaz";
function showstudent(){
    let course = "software engineering";
    console.log(course);
    console.log( studentname);
}
showstudent();
console.log (studentname);
  
// task of global and local scope 

let Studentname ="Ali";
let Marks=85;
function showresult(){
    let grade = "A " ;
    console.log(Marks);
    console.log(Studentname);
    console.log(grade);
    }
    showresult();
     console.log(Studentname);
    console.log(Marks);

    // Block Scope

    if(true);
    {
        let age=18;
        console.log(age);
    }
     
    // subtraction 

    function subtract(a,b){
        return a-b;
    }
    console.log(subtract(20,8));

    // multiply 

    function multiply(a,b)
    {
        return a*b;
    }
    console.log(multiply(5,4));

    // arrow function subtraction 

   const subtract = (a,b)=>
    {
        return a-b;
    };
    console.log(subtract(20,8));

    // Celsius to Fahrenheit Converter

    function CelsiustoFahrenheitConverter(Celsius){
    let F;
  
   F = (Celsius *9/5) + 32;
     return F;
    
    }
    console.log(CelsiustoFahrenheitConverter(25));

    // Grading Utility
   
    function calculateGrade(marks){
      if(marks>=80){
        return"A";
      }  
      else if(marks>=70)
      {
        return"B"; 
      }
       else if(marks>=60)
      {
        return"C";
      }
       else 
      {
        return"F";
      }
    }
 console.log(calculateGrade(85));
 console.log(calculateGrade(75));
 console.log(calculateGrade(65));
 console.log(calculateGrade(40));
   