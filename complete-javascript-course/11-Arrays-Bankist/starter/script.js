'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + i} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} £`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // console.log(acc);
    // console.log(acc.)

    acc.username = acc.owner //Sarah Smith
      .toLowerCase() // sarah smith
      .split(' ') //[sarah, smith]
      .map(name => name[0]) //[s, s]
      .join(''); //ss
  });
};
createUsernames(accounts); // stw

const updateUI = function (acc) {
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};

//EVENT HANDLER//
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear Input Fields//
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);

    //Display Movements
    displayMovements(currentAccount.movements);

    //Display Balance
    calcDisplayBalance(currentAccount);
    //Display Summary
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    //Delete Account//
    accounts.splice(index, 1);

    //Hide UI//
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jade'.at(0));
// console.log('jade'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------FOR EACH---------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR']);

//Coding Challenge #1

//Test Data
// Data 1: Julia's data [3, 5, 2, 12, 7],
// Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3],
// Kate's data [10, 5, 6, 1, 4]

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (j, k) {
//   let dogsJuliaNew = j;
//   console.log(dogsJuliaNew);
//   console.log(dogsJuliaNew.slice(1, -2));
//   const juliasFixedData = dogsJuliaNew.slice(1, -2);
//   const completedData = juliasFixedData.concat(k);
//   console.log(completedData);

//   for (const [i, v] of completedData.entries()) {
//     if (v > 3) {
//       console.log(`Dog number ${i + 1} is an adult and is ${v} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy and is ${v} years old`);
//     }
//   }
// };

// checkDogs(dogsJulia, dogsKate);
// checkDogs(dogsJulia2, dogsKate2);

//MAP METHOD//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// //Arrow//
// const movementsUSDfor = movements.map(mov => mov * eurToUsd);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

//FILTER METHOD//

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);

// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//REDUCE METHOD//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   // console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balanceArrow);

// //Maximum Value//
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// Test Data
// Data 1: Julia's data [3, 5, 2, 12, 7],
// Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3],
// Kate's data [10, 5, 6, 1, 4]

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (j, k) {
//   let dogsJuliaNew = j;
//   console.log(dogsJuliaNew);
//   console.log(dogsJuliaNew.slice(1, -2));
//   const juliasFixedData = dogsJuliaNew.slice(1, -2);
//   const completedData = juliasFixedData.concat(k);
//   console.log(completedData);

//   for (const [i, v] of completedData.entries()) {
//     if (v > 3) {
//       console.log(`Dog number ${i + 1} is an adult and is ${v} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy and is ${v} years old`);
//     }
//   }
// };
// // checkDogs(dogsJulia, dogsKate);
// // checkDogs(dogsJulia2, dogsKate2);

// //Coding Challenge 2//

// const ages1 = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAgeArr = ages.map(function (x) {
//     let humanAge = 0;
//     if (x <= 2) {
//       humanAge = 2 * x;
//     } else {
//       humanAge = 16 + x * 4;
//     }

//     return humanAge;
//   });

//   const olderDogs = humanAgeArr.filter(function (y) {
//     return y >= 18;
//   });

//   const oldDogAvg = olderDogs.reduce(function (acc, cur) {
//     return acc + cur;
//   }, 0);

//   return oldDogAvg / olderDogs.length;
// };
// console.log(calcAverageHumanAge(ages1));
// console.log(calcAverageHumanAge(ages2));

//Chaining Methods//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const totalDepositISD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositISD);

// //Coding Challenge #3//
// const array1 = [5, 2, 4, 1, 15, 8, 3];
// const array2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = array1
//   .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//   .filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge);

//Find Method//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// const why = [1, 2, 3, 4];

// const omg = why.find(arr => arr < 2);
// console.log(omg);
