'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jade';
// calcAge(1993);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jade';
// let job = 'actress';
// const year = 1993;

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1995);

// const jade = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jade.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jade.calcAge;
// matilda.calcAge();

// const jade = {
//   firstName: 'Jade',
//   year: 1993,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jade.greet();
// jade.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   firstName: 'Jade',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

//Primitive Types
let lastName = 'Woods';
let oldLastName = lastName;
lastName = 'Dacanay';
console.log(lastName, oldLastName);

//Reference Types
const jade = {
  firstName: 'Jade',
  lastName: 'Woods',
  age: 28,
};
const marriedJade = jade;
marriedJade.lastName = 'Dacanay';
console.log('Before marriage: ', jade);
console.log('After marriage: ', marriedJade);

//Copying Objects
const jade2 = {
  firstName: 'Jade',
  lastName: 'Woods',
  age: 28,
  family: ['Trent', 'Angela'],
};

const jadeCopy = Object.assign({}, jade2);
jadeCopy.lastName = 'Dacanay';

jadeCopy.family.push('Mary');
jadeCopy.family.push('John');

console.log('Before marriage: ', jade2);
console.log('After marriage: ', jadeCopy);
