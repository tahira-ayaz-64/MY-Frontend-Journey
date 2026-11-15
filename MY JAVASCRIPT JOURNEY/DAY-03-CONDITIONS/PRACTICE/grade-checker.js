// if is used for one condition 
let marks=65;
if (marks>=50){
    console.log("student passed");
}

// if else  is used for two conditions 
let studentMarks=35;
if(studentMarks=50){
   console.log("student passed");  
}
else
{
    console.log("TRY NEXT TIME ");  
}

// else if is used for multiple conditions 
let marksofstudent=75;
if(marksofstudent>=80){
    console.log("Excellent");
}
else if(marksofstudent>=70){
    console.log("Very Good ");
}
else if(marksofstudent>=60){
    console.log("Good");
}
else if(marksofstudent>=50){
    console.log("Pass ");
}
else {
    console.log("best of luck for next time  ");
}

//Truthy and Falsy Values


let username = "Tahira";

if (username) {
    console.log("Name is available");
} else {
    console.log("Name is missing");
}

let studentname = "";

if (studentname) {
    console.log("Name is available");
} else {
    console.log("Name is missing");
}
// switch statement

let day =8;
switch(day){
    case 1:
   console.log("Monday");
   break;
   case 2:
    console.log("Tuesday");
       break;

    case 3:
   console.log("wednesday");
      break;

    case 4:
    console.log("thursday");
       break;

     case 5:
    console.log("friday");
       break;

     default:
     console.log("invalid");
}
