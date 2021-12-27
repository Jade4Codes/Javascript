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

// const calcAverage = (n1, n2, n3) => {
//   const total = (n1 + n2 + n3) / 3;
//   return total;
// };
// //const calcAverage = (a,b,c) => (a + b + c) / 3;

// // calcAverage(44, 23, 71);
// // calcAverage(85, 54, 41);
// const dolphinData1 = calcAverage(44, 23, 71);
// const dolphinData2 = calcAverage(85, 54, 41);
// // console.log(calcAverage(44, 23, 71));
// // console.log(calcAverage(85, 54, 41));

// // calcAverage(65, 54, 49);
// // calcAverage(23, 34, 27);
// const koalaData1 = calcAverage(65, 54, 49);
// const koalaData2 = calcAverage(23, 34, 27);
// // console.log(calcAverage(65, 54, 49));
// // console.log(calcAverage(23, 34, 27));

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     return `Dolphin's win (${avgDolphins} vs. ${avgKoalas})`;
//   }

//   const winner = `Koala's win (${avgKoalas} vs. ${avgDolphins})`;
//   return winner;
// }

// console.log(checkWinner(dolphinData1, koalaData1));
// console.log(checkWinner(dolphinData2, koalaData2));

//Arrays//
// const friend1 = "Michael";
// const friend2 = "Sarah";
// const friend3 = "Peter";

// const friends = ["Michael", "Sarah", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Larry";
// console.log(friends);

// const jade = ["Jade", "Woods", 2037 - 1993, "actress", friends];
// console.log(jade);
// console.log(jade.length);

// //Exercise//
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Sarah", "Peter"];

// //Add Elements//
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //Remove Elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf("Sarah"));

// friends.push(23);
// console.log(friends.includes("Sarah"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Sarah")) {
//   console.log("You have a friend called Peter");
// }

// //CODING CHALLENGE 2 //

// function calcTip(billtotal) {
//   if (billtotal > 300 && billtotal < 50) {
//     return billtotal * 0.2;
//   }

//   return billtotal * 0.15;
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(bills);
// console.log(tips);

// const totalAmount = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
// ];
// console.log(totalAmount);

// const jadeArray = [
//   "Jade",
//   "Woods",
//   2037 - 1993,
//   "actress",
//   ["Michael", "Peter", "Steven"],
// ];

// const jade = {
//   firstName: "Jade",
//   lastName: "Woods",
//   age: 2037 - 1991,
//   job: "actress",
//   friends: ["Miguel", "Peter", "Steven"],
// };

// console.log(jade);

// console.log(jade.lastName);
// console.log(jade["lastName"]);

// const nameKey = "Name";
// console.log(jade["first" + nameKey]);
// console.log(jade["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jade? Choose between firstName, lastNAme, age, job, and friends"
// ); // returns what u typed
// console.log(jade[interestedIn]);

// if (jade[interestedIn]) {
//   console.log(jade[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastNAme, age, job, and friends"
//   );
// }

// jade.location = "United States";
// jade["twitter"] = "@jadieboo22";
// console.log(jade);

// console.log(
//   `${jade.firstName} has ${jade.friends.length} friends, and her best friend is called ${jade.friends[0]}`
// );

const jade = {
  firstName: "Jade",
  lastName: "Woods",
  birthYear: 1993,
  job: "actress",
  friends: ["Miguel", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  // calcAge: function () {
  //   this.age = 2037 - this.birthYear;
  //   return this.age;
  // },
  getSummary: function () {
    return `${jade.firstName} is a ${jade.calcAge(1993)}-year old ${
      jade.job
    } and she has ${jade.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(jade.calcAge(1993));

// console.log(
//   `${jade.firstName} is a ${jade.calcAge(1993)}-year old ${jade.job}.`
// );
console.log(jade.getSummary());
