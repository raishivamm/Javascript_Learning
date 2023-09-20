'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest){
//     hasDriversLicense = true;
// }
// if(hasDriversLicense){
//     console.log("I can Drive");
// }

// const interface = 'Audio';
// console.log(interface);

// Functions

// function Greeting(){
//     console.log("Hey Good Morning!");
// }
// Greeting();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const juiceMaker = fruitProcessor(3,5);
// console.log(juiceMaker);
// console.log(fruitProcessor(10,20));

// // function declaration

// function calAge(birthYear){
//     const age = 2023 - birthYear;
//     return age;
// }
// const myAge1 = calAge(1999);
// console.log(myAge1);

// // function Expression
// const age = function (birthYear){
//     return 2023 - birthYear;
// }
// const myAge2 = age(1999);
// console.log(myAge2);

// Arrow Functions
// const calAge3 = birthYear => 2023 - birthYear;
// const age2 = calAge3(1994);
// console.log(age2);

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2023-birthYear;
//     const yearsLeft = 60 - age;
//     // return yearsLeft;
//     return `${firstName} retires after ${yearsLeft} years`;
// }
// console.log(yearsUntilRetirement(1999,'Shivam'));

// functions calling another functions

// function fruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges){
//     const cutApple = fruitPieces(apples);
//     const cutOrange = fruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${cutApple} apples and ${cutOrange} oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// Reviewing functions

// const calcAge = function (year){
//     return 2023-year;
// }
// const yearsUntilRetirement = function(birthYear,firstName){
//     const age = calcAge(birthYear);
//     const yearsLeft = 60 - age;
//     // return yearsLeft;
//     return yearsLeft;
// }
// console.log(yearsUntilRetirement(1999,'Shivam'));

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (data1,data2,data3) => {
//     return (data1+data2+data3)/3;
// }

// const scoreDolphinsData1 = calcAverage(44,23,71);
// const scoreKoalasData1 = calcAverage(65,54,49);

// const scoreDolphinsData2 = calcAverage(85,54,41);
// const scoreKoalasData2 = calcAverage(23,34,27);

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins>avgKoalas){
//         console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if(avgKoalas>avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        
//     }
//     else{
//         console.log(`No team wins...`);
//     }
// }
// checkWinner(scoreDolphinsData1,scoreKoalasData1);
// checkWinner(scoreDolphinsData2,scoreKoalasData2);

// Arrays

// const friends = ['Shivam', 'Tabish', 'Rohit', 'Ronit'];
// console.log(friends);
// console.log(friends.length);

// const array = new Array('CP', 'Arpit',23, 'Golu', 'Abhishek');
// console.log(array.length);
// console.log(array[3]);

// const calcAge = function(year){
//         return 2023-year;
//      }

// const years = [1999,1996,1994,1993];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4= calcAge(years[years.length-1]);

// console.log(age1,age2,age3,age4);
// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years[years.length-1])];
// console.log(ages);
// const ages2 = [age1,age2,age3,age4];
// console.log(ages2);

// Array methods

// const friends = ['Shivam','Ankit','Tabish','Rohit'];
// console.log(friends);
// friends.push('Arpit');
// console.log(friends);
// friends.unshift('Mregank');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Tabish'));
// console.log(friends.includes('Rohit'));
// console.log(friends.includes('Kinjal'));

// const calcTip = function(bill){
//         let tip;
//         if(bill>=50 && bill<=300){
//             tip = (bill*15)/100;
//         }
//         else{
//             tip=(bill*20)/100;
//         }
//         return tip;
//     }
//     const bills = [125,555,44];
//     const tip1 = calcTip(bills[0]);
//     const tip2 = calcTip(bills[1]);
//     const tip3 = calcTip(bills[2]);
    
//     const tips = [tip1,tip2,tip3];
//     console.log(tips);
    
//     const totals = [bills[0]+tip1,bills[1]+tip2,bills[2]+tip3];
//     console.log(totals);

// Objects

// const shivamArray = [
//         'Shivam',
//         'Rai',
//         23,
//         'Student',
//         ['Rohit','Tabish','Arpit']
// ];
// console.log(shivamArray);

// const shivamObject={
//         firstName: 'Shivam',
//         lastName : 'Rai',
//         age:24,
//         profession: 'Student',
//         friends:['Rohit','Tabish','Arpit']
// };
// console.log(shivamObject);

// console.log(shivamObject.firstName);
// console.log(shivamObject['firstName']);

// const keyValue = 'Name';
// console.log(shivamObject['first'+keyValue]);
// console.log(shivamObject['last'+keyValue]);

// const interestedIn = prompt(`What do you want to know about shivamObject choose between first name last 
//  name job and age`);
// console.log(shivamObject[interestedIn]);

// shivamObject.location='India';
// shivamObject['twitter'] = '@raiShivamm';
// console.log(shivamObject);

// console.log(`${shivamObject.firstName} has ${shivamObject.friends.length} friends and the best friend is ${shivamObject.friends[0]}`);

// Objects Methods

// const shivam={
//         firstName: 'Shivam',
//         lastName : 'Rai',
//         birthYear:1999,
//         age:24,
//         profession: 'Student',
//         friends:['Rohit','Tabish','Arpit'],
//         hasDrivingLicense:false,
//         // calcAge:function(birthYear){
//         //         return 2023-birthYear;
//         // },
//         // calcAge:function(){
//         //         console.log(this);
//         //         return 2023-this.birthYear;
//         // }
//         calcAge:function(){
//                 this.age = 2023-this.birthYear;
//                 return this.age;
//         },
//         getSummary: function(){
//                 return `${this.firstName} is a ${this.calcAge()} years old teacher, and he has ${this.hasDrivingLicense ? 'a' : 'no'} drivers license`;
//         }
// };

// console.log(shivam.getSummary());
// console.log(shivam.calcAge());
// console.log(shivam['calcAge'](1999));

// const mark = {
//         fullName : "Mark Miller's",
//         mass : 78,
//         height : 1.69,
//         calcBMI : function(){
//             mark.bmi = this.mass/(this.height*this.height);
//             return this.bmi;
//         }
//     };
    
//     const john = {
//         fullName : "John Smith's",
//         mass : 92,
//         height : 1.95,
//         calcBMI : function(){
//             john.bmi = this.mass/(this.height*this.height);
//             return this.bmi;
//         }
        
//     };
//     let johnBMI = john.calcBMI();
//     let markBMI = mark.calcBMI();
    
//     if(johnBMI> markBMI){
//         console.log(`${john.fullName} BMI (${johnBMI}) is higher than ${mark.fullName} (${markBMI}) !`);
//     }
//     else{
//         console.log(`${mark.fullName} BMI (${markBMI}) is higher than ${john.fullName} (${johnBMI}) !`);
//     }

// for loop

// for(let rep=1;rep<=10;rep++){
//         console.log('Lifting Weights Repetition '+rep);
// }

// const shivamArray = [
//         'Shivam',
//         'Rai',
//         23,
//         'Student',
//         ['Rohit','Tabish','Arpit']
// ];
// const types = [];

// for(let i=0;i<shivamArray.length;i++){
//         console.log(shivamArray[i], typeof shivamArray[i]);
//         types.push(typeof shivamArray[i]);
// }
// console.log(types);

// const birthYear = [1991,1994,1999,2004];
// const ages = [];
// for(let i =0;i<birthYear.length;i++){
//         ages.push(2023-birthYear[i]);
// }
// console.log(ages);

// While loop

let i =1;
while(i<11){
        console.log(`Lifting Weights Repetition ${i}`);
        i++;
}

















