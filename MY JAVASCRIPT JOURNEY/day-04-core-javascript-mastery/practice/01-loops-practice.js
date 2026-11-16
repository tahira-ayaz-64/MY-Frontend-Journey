// print number less than 20 

for(let i=1;i<=20;i++){
    console.log("Number ="+i);
}

// even number less then 50


for(let j=1;j<=50;j++){
    if(j%2===0){
        console.log("Even Number = " +j);
    }
}

// Table of 7

for(let k=1;k<=10;k++)
{
    console.log( " 7 *"+k+"="+(7*k) );  

}

//Cumulative Sum (1–100)

let Sum=0;
for(let p=1;p<=100;p++)
{
   Sum = Sum+p;
}
console.log("Sum = "+ Sum);

 // for...of Loop

 let Fruits=["APPLE","MANGO","BANANA","ORANGE","STRABERRY"];
 for(let Fruit of Fruits ){
   console.log(Fruit.toUpperCase()); 
 }
         
 
  // WHILE Loop

 let a=1;
 while(a<=10){
    console.log(a);
    a++
 }

 // REVERSE COUNTING 

 let b=10;
 while(b>=1){
    console.log(b);
    b--;
 }

 //Sum using while loop

let SUM=0;
let c=1;
while( c<=10){
    SUM=SUM+c;
    c++;
}
console.log(SUM);

//   do...while loop

let e=1;
do {
    console.log(e);
    e++;
}
while(e<=5);

//  Special behavior of do...while

let f=10;
do{
    console.log(f);
    f++;
} while(  f<=5);


//  break statement

for (let l=0;l<=10;l++){
    if(l===7)
    {
        break;
    }
    console.log(l);
}

// continue statement

for(let m=0;m<=10;m++){
    if(m===5){
        continue;
    }
    console.log(m);
}

//for...of Loop

let subjects=["maths","physics","chemistry","computer","social sciences"];
for(let subject of subjects ){
    console.log(subject);
}