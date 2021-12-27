"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//   console.log("My name is Jade");
// }

// //calling/ running/ invoking function//
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1993);

//Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Jonas"));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🏝`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// function numberGame(n1, n2, n3) {
//   const numAvg = (n1 + n2 + n3) / 3;

//   if (numAvg < 10) {
//     return "Low";
//   }

//   return "High";
// }

// const numberGame = function (n1, n2, n3) {
//   const numAvg = (n1 + n2 + n3) / 3;

//   if (numAvg < 10) {
//     return "Low";
//   }

//   return "High";
// };

//Coding Challenge

const calcAverage = (n1, n2, n3) => {
  const total = (n1 + n2 + n3) / 3;
  return total;
};

// calcAverage(44, 23, 71);
// calcAverage(85, 54, 41);
const dolphinData1 = calcAverage(44, 23, 71);
const dolphinData2 = calcAverage(85, 54, 41);
// console.log(calcAverage(44, 23, 71));
// console.log(calcAverage(85, 54, 41));

// calcAverage(65, 54, 49);
// calcAverage(23, 34, 27);
const koalaData1 = calcAverage(65, 54, 49);
const koalaData2 = calcAverage(23, 34, 27);
// console.log(calcAverage(65, 54, 49));
// console.log(calcAverage(23, 34, 27));

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    return `Dolphin's win (${avgDolphins} vs. ${avgKoalas})`;
  }

  const winner = `Koala's win (${avgKoalas} vs. ${avgDolphins})`;
  return winner;
}

console.log(checkWinner(dolphinData1, koalaData1));
console.log(checkWinner(dolphinData2, koalaData2));
