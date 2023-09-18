/*
let js = 'amazing';
console.log(40+31-86);

console.log('Shivam');
console.log(23);

let firstName = "Shivam";
console.log(firstName);

let country = "India";
let continent = "Asia";
let population = 140000000
console.log(country);
console.log(continent);
console.log(population);
*/


/*let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Shivam');
console.log(typeof 34.87);

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

let s = null;
console.log(s);
console.log(typeof s);*/

/*let age=30;
age=31;

const birthYear =1999;
birthYear =1998;
const value;

var job='Programmer';
job = 'teacher';

lastName='Rai';
console.log(lastName);*/


//Math operators
// const now = 2023;
// const shivamAge = now-1999;
// const ankitAge = now-2000;
// console.log(shivamAge, ankitAge);
// console.log(shivamAge*2, shivamAge/10, 2**3);

// const firstName = 'Shivam';
// const lastName = 'Rai';
// console.log(firstName +" "+ lastName);

// //Assignment operators
// let x = 10+5;
// x+=10;
// x*=4;
// x++;
// ++x;
// x--;
// --x;
// console.log(x);

// //comparison operators
// console.log(shivamAge>ankitAge);


// const massMark=78,massJohn = 92;
// const heightMark = 1.69,heightJohn = 1.95;
// const BMIMark = massMark/(heightMark*heightMark);
// const BMIJohn = massJohn/(heightJohn*heightJohn);
// const markHigherBMI = (BMIMark > BMIJohn);
// console.log(markHigherBMI);


// const firstName = "Shivam";
// const lastName = "Rai";
// const profession = "Programmer";
// const age = 24;
// console.log("I'm "+firstName+" "+lastName+" "+age+" "+"years old");

// const nameNew = `I'm ${firstName} ${lastName},${age} years old ${profession}`; 
// console.log(nameNew);

// console.log(`I'm a good student..`);
// console.log(`String
// multiples lines 
// codes are
// here`);

// const age = 19;
// const isOldEnough = age>=18
// if(isOldEnough){
//     console.log(`Shivam Can drive his car🚗`);
// }

// const year = 1889;
// let century;
// if(year<=2000){
//     century = 20
// }
// else{
//     century=21;
// }
// console.log(century);

// type conversion
const birthYear ='1999';
console.log(Number(birthYear)+18);
console.log(String(23),23);

// type coercion

console.log('Im '+23+'years old');
console.log('23'-'10'-3);

// Equality operators

// const age = '18';
// if(age==18){
//     console.log('loose equality operators');
// }
// if(age===18){
//     console.log('Strict equality operators');
// }

// let age =Number(prompt("Enter your age"));
// console.log(age);
// if(age==24){
//     console.log('you are adult now');
// }
// if(age==='24'){
//     console.log('hello');

// }

// let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`))
// if(numNeighbours === 1){
//     console.log(`Only 1 border`);
// }
// else if(numNeighbours>1){
//     console.log(`More than 1 border`);
// }
// else{
//     console.log(`No Borders`);
// }

// Switch statement


// const day = 'Monday';
// switch(day){
//     case 'Monday':
//         console.log('Started learning javascript');
//         break;
//     case 'Tuesday':
//         console.log('Started learning new theories');
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('Write code examples');
//         break;
//     case 'Friday':
//         console.log('Record videos');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log("Enjoy your Weekend");
//         break;
//     default:
//         console.log('Not a day');

// }

// Using if-else Statements

const day = 'Saturday'

if(day==="Monday"){
    console.log('Started learning javascript');
}
else if (day==='Tuesday'){
    console.log('Started learning new theories');
}
else if(day==='Wednesday' || day==='Thursday'){
    console.log('Write code Examples');
}
else if(day==='Friday'){
    console.log('Record Videos');
}
else if(day==='Saturday'|| day==='Sunday'){
    console.log("Enjoy your Weekends");
}
else{
    console.log("Not a Day");
}