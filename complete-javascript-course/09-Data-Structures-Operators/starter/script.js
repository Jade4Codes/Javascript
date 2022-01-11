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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alba',
      'Davies',
      'Kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lebowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lebowski', 'Gnarby', 'Lebowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const playersSored = game.scored;

for (const [index, player] of playersSored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

const betOdds = game.odds;

let avg = 0;
for (const key in betOdds) {
  avg = avg + betOdds[key];
}
avg = avg / Object.keys(betOdds).length;
console.log(Math.round(avg));

for (const el in betOdds) {
  let word = '';

  if (game[el]) {
    word = `victory ${game[el]}`;
  } else {
    word = 'draw';
  }
  console.log(`Odd of ${word}: ${betOdds[el]}`);

  // console.log(el);
}
console.log(betOdds);
