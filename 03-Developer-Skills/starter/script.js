// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// const y = "24";
// console.log(typeof y);
// console.log(x);
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatureAmplitude = function (arr) {
//   let min = Number.MAX_VALUE;
//   let max = Number.MIN_VALUE;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       continue;
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max - min;
// };
// console.log(temperatureAmplitude(temperatures));

// alert("I'm a Javascript");

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log(str);
};
printForecast(test1);
printForecast(test2);
