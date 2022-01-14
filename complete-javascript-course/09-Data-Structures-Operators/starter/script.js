'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  hours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //^^ THIS CAN BE SHORTEND TO ^^//
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );

    //To Call The Above Function:
    //restaurant.orderPasta(...ingredients);
    //This will get the array prompt answers into the orderPasta console log
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//CODING CHALLENGE #4//

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// const btn = document.querySelector('.btn-1');

// const txtArea = document.querySelector('.textarea-1');

// btn.addEventListener('click', clickHandlr, false);

// function clickHandlr() {
//   // console.log(txtArea.value);

//   const txtAreaVal = txtArea.value.split(' ');

//   console.log(txtAreaVal);
// }

// function camelCaseThis(word) {
//   const newWords = word.split('_');
//   const [firstWord, secondWord] = newWords;
//   const secondWordUpper =
//     secondWord[0].toUpperCase() + secondWord.slice(1).toLowerCase();
//   const finalWord = `${firstWord}${secondWordUpper}`;
//   console.log(finalWord);
// }

// document.querySelector('button').addEventListener('click', doThis);

// camelCaseThis('jade_case');
// camelCaseThis('first_name');
// camelCaseThis('Some_Variable');
// camelCaseThis('calculate_AGE');
// camelCaseThis('delayed_departure');

// const array1 = [
//   'jade_case',
//   'first_name',
//   'Some_Variable',
//   'calculate_AGE',
//   'delayed_departure',
// ];

// for (const wordss of array1) {
//   camelCaseThis(wordss);
// }

//STRINGS PART 3//
//Split and Join//
// console.log('a+very+nice+string'.split('+'));
// console.log('Jade Woods'.split(' '));

// const [firstName, lastName] = 'Jade Woods'.split(' ');

// const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = []; // storing each loop result in this array

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jade woods');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4337842733826712));
// console.log(maskCreditCard(33826712));
// console.log(maskCreditCard('6352424161728922'));

// //Repeat//
// const message2 = 'Bad weather...All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

//Strings Part 2//
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //To Fix Capitalization//

// const passenger = 'jAde'; //Jade
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing Emails//
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// //LONG APPROACH//
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //REPLACING STRINGS//
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replaceAll(/door/g, 'gate'));

// //Booleans//
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('Airb'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the NEW Airbus Family');
// }

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed to board!');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some food, and a pocketknife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//Stings Part 1 //
// console.log(plane[0]);
// console.log('B307'[0]);

// console.log(airline.length);
// console.log('B307'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middlle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s == 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

//SETS//
////////////
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jade'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('Jadewoods').size);

//property NAMES
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //PROPERT VALUES
// const values = Object.values(hours);
// console.log(values);

// //Entrie Object
// const entries = Object.entries(hours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// if (restaurant.hours.fri.open) console.log(restaurant.hours.fri.open);

// //WITH optional chaining
// console.log(restaurant.hours.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // THE ?? IS FOR NULL AND UNDEFINED//

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Jade', email: 'hello@jade.io' }];
// console.log(users[0]?.name ?? 'user array empty');
//^^If users[0] element does exist, then give us its name^^//

// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);

//Property Values

// const values = Object.values(hours);
// console.log(values);

//Entrie Object
// const entries = Object.entries(hours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Jade', email: 'hello@jade.io' }];

// console.log(users[0]?.name ?? 'User array empty');

//Optional Chaining

//The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// console.log([...menu.entries()]);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'Pietza',
//   owner: 'Giovanni Rossi',
// };

// //OR ASSIGNMENT OPERATOR
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

//Shorter Way
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //NULLISH ASSIGNMENT OPERATOR (Null or Undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//AND ASSIGNMENT OPERATOR

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

//Shorter Way
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// console.log(3 || 'Jade'); //Finds the truthy
// console.log(0 && 'Jade'); //Finds the falsy

//Spread
// const arr = [1, 2, ...[3, 4]];

// //REST
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// //Spreading Arrays in Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrroms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

/////////////////////////////////////
//The Spread Operator (...)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//CODING CHALLENGE 1//

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrusia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alba',
//       'Davies',
//       'Kimich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lebowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lebowski', 'Gnarby', 'Lebowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alba',
//   'Davies',
//   'Kimich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lebowski',
// ];
// const players2 = [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ];

// const gk = 'Neuer';
// const fieldPlayers = [
//   'Pavard',
//   'Martinez',
//   'Alba',
//   'Davies',
//   'Kimich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lebowski',
// ];

// const allPlayers = [...players1, ...players2];
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// console.log(true && 'nullx');

// const team1 = game.odds.team1;

// const { odds } = game;
// const { team1 } = odds

// const { odds } = game;

// const hello = game.odds;

// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrusia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alba',
//       'Davies',
//       'Kimich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lebowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lebowski', 'Gnarby', 'Lebowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// let pScored = game.scored;
// const gameFinal1 = game.team1;
// const gameFinal2 = game.team2;

// for (const [index, value] of pScored.entries()) {
//   console.log(`Goal ${index + 1}: ${value}`);
// }

// const betOdds = game.odds;

// let avg = 0;
// for (const key in betOdds) {
//   avg = avg + betOdds[key];
// }
// avg = avg / Object.keys(betOdds).length;
// console.log(Math.round(avg));

// for (const el in betOdds) {
//   let word = '';

//   if (game[el]) {
//     word = `victory ${game[el]}`;
//   } else {
//     word = 'draw';
//   }

//   console.log(`Odd of ${word}: ${betOdds[el]}`);

//   // console.log(el);
//   // if()
// }
// console.log(betOdds);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrusia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alba',
//       'Davies',
//       'Kimich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lebowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lebowski', 'Gnarby', 'Lebowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const playersSored = game.scored;

// for (const [index, player] of playersSored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// const betOdds = game.odds;

// let avg = 0;
// for (const key in betOdds) {
//   avg = avg + betOdds[key];
// }
// avg = avg / Object.keys(betOdds).length;
// console.log(Math.round(avg));

// for (const el in betOdds) {
//   let word = '';

//   if (game[el]) {
//     word = `victory ${game[el]}`;
//   } else {
//     word = 'draw';
//   }
//   console.log(`Odd of ${word}: ${betOdds[el]}`);

//   // console.log(el);
// }
// console.log(betOdds);
