// //Values and Variables
// const country = 'India';
// let population = 140000000;
// const continent = 'Asia';
// console.log(country);
// console.log(population);
// console.log(continent);

// // Data Types
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof country);

// // let,const and var
// language = 'Hindi';
// population /=2;
// population+=1;
// console.log(population);
// let populationOfFinland = 6000000;
// let comaprePopulation = population>populationOfFinland;
// console.log(comaprePopulation);
// let description = "Portugal is in Europe , and its 11 million people speak portugese";
// console.log(description);
// description = `Portugal is in Europe , and its 11 million people speak portugese`;

// // type Conversion and coercion
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// let value = 5 + 6 + '4' + 9;
// console.log(typeof value);
// console.log(5 + 6 + '4' + 9 + 8);

// Equality Operators
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

const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;
if(scoreDolphins>scoreKoalas){
    console.log(`"Dolphins wins the trophy"`);
}
else if(scoreKoalas>scoreDolphins){
    console.log("Dolphins wins the trophy");
}
else{
    console.log("Both win the trophy");
}