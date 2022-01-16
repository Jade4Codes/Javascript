'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jade = {
//   name: 'Jade Woods',
//   passport: 23556632774,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Ms.' + passenger.name;

//   if (passenger.passport === 23556632774) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jade);
// console.log(flight);
// console.log(jade);

// //Example Of To Many Objects For Functions etc//
// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// }

// newPassport(jade);

//Higher Order Functions//

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //example//
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋🏽');
// };
// document.body.addEventListener('click', high5);

// ['Jade', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// // const greeterHey = greet('Hey');
// // greeterHey('Jonas');
// // greeterHey('Steven');

// greet('Hello')('Jonas');

// // console.log(greeterHey);

// const happyGreeting = greeting => name => console.log(`${greeting} ${name}`);

// happyGreeting('Yo')('Jade');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jade Woods');
// lufthansa.book(635, 'Mike Steeze');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams');
// // console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// // console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 543, 'Mary Cooper');

// //Apply Method
// const flightData = [589, 'Jorge Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //Bind Method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');
// bookLX(43, 'Eliza Pancakes');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Bobby Bob');
// bookEW23('Matty Mat');

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   // console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Application

// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);
// // //0.23 is now the presaved rate for addTax function

// // console.log(addVAT(100));
// // console.log(addVAT(23));

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTax(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//Coding Challenge #1//
//////////////////////////

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   answers: [0, 0, 0, 0],

//   registerNewAnswer() {
//     //Get Answer//
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     //Register New Answer//
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
