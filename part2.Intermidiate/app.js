// string literals
// const templateString = `The quick
// brown fox
// jumps over
// the lazy dog`;

// console.log(templateString);

// let firstName = "John";
// let lastName = "Doe";

// console.log(`my name is ${firstName} ${lastName}`);

// Arrow functions -- shorter way to write functions

// basic way

// function greet(username) {
//   return `Hello ${username}`;
// }
// console.log(greet("John"));

// // now the arrow function way
// greet = (username) => `Hello ${username}`;

// console.log(greet("John"));

// const double = (number) => number * 2;
// console.log(double(4));

// const getPersionES6 = (name, age, height) => {
//   return {
//     name,
//     age,
//     height,
//   };
// };

// console.log(getPersionES6("John", 25, 168));

// default
// function ratings(rate = 0) {
//   if (rate === 5) {
//     console.log(`high ratings`);
//   } else if (rate === 0) {
//     console.log(`low Rating`);
//   }
// }

// ratings();

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(3));

// const multiply = (a, b = 1) => a * b;

// console.log(multiply(4));

// spread operator -- takes in a iterable (eg an array) and expands it into individual Elements
//used to make shallow copies of JS objects
// enhances readabilty.
// we use ... as the spreader.

// function giveMe4(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// const colors = ["red", "green", "blue", "teal"];

// giveMe4(...colors);

// const strNums = ["one", "two", "three"];
// const moreStrNums = ["four", "five", "six"];
// const concat = [...strNums, ...moreStrNums];

// console.log(concat);

// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const conc = { ...obj1, ...obj2 };

// console.log(conc);

// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let clonee = [...arr, ...arr2];

// console.log(clonee);

// const user = {
//   name: "Jen",
//   age: 22,
// };

// const clone = { ...user };
// console.log(clone);

//Rest operator -- allows functions to accept an indefinite number of arguments
//  uses ... just like the spread function.

// function user(...userData) {
//   console.log(userData);
// }
// user("John", 25, "programmer");

// Destructuring -- allows us to unpack values from data-structure(arrays,objects) into   separate disrinct variables.
// destructured an array
// const foo = ["one", "two", "three"];
// const [one, two] = foo;
// console.log(one);
// console.log(two);

// // Destructured a function
// function f() {
//   return [1, 2];
// }

// let [a, b] = f();

// console.log(a);
// console.log(b);

// // Assingning the rest of an array to a variable.
// const [m, ...n] = ["one", 2, 4, 5, "this"];
// console.log(n);

// const colors = ["red", "green", "blue", "yellow", "orange"];

// let [color1, color2, color3] = colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);

//in object destructuring  order doesnt matter but the name does matter.

// const student = {
//   name: "John",
//   position: "first",
//   rollno: 25,
// };

// let { name, position, rollno } = student;
// console.log(name);
// console.log(position);
// console.log(rollno);

// const person = {
//   name: "John doe",
//   age: 30,
//   gender: "male",
//   country: "Kenya",
// };

// let { name, age, country } = person;
// console.log(name);
// console.log(age);
// console.log(country);

// ternary operator -- consise way of writing conditional expressionsonly operator that takes 3 operands
//  condition ? exprIfTrue : expriIfFalse; -- but remember, this does not apply to the if else condition.

// the long way
// let password = 7;

// function passwordChecker(ps) {
//   // if (ps === 8) {
//   //   return `Strong password`;
//   // } else {
//   //   return `password should be 8 characters`;
//   // }
//   // shorter way
//   return ps === 8 ? `Strong passord` : `Passwod should be 8 characters`;
// }
// console.log(passwordChecker(password));

// // Example 2
// const age = 17;

// const isAdult = age >= 18 ? `Adult` : "Not yet an Adult";
// console.log(isAdult);

// // challenge
// let isHavingMoney = false;
// const haveMoney =
//   isHavingMoney === true ? "Buy products" : "They should bring money";

// console.log(haveMoney);

//for...in  -- way to loop through the keys(propety names of an object)
// for (let key in <object>){...}
// let person = {
//   name: "Ndungu",
//   age: 25,
//   gender: "male",
// };

// for (let keys in person) {
//   console.log(keys, person[keys]);
// }

// let list = ["one", "two", "three", "four"];

// for (let index in list) {
//   console.log(`${index}: ${list[index]}`);
// }
//challenge
// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let objects in object) {
//   console.log(`${objects}: ${object[objects]}`);
// }

// for...of -- allows one to iterate directly over the values of thr elemnts, rather than dealing with their indices or keys, which makes the code more readable and less error-prone

//for (variable of iterable){...}

// let persons = ["Jaba", "mzae", "Mark", "Pesh"];

// for (let person of persons) {
//   console.log(person);
// }

// const text = "hello you";
// for (const char of text) {
//   console.log(char);
// }

// // challenge
// const array1 = ["a", "b", "c"];
// for (const character of array1) {
//   console.log(character);
// }

// ADVANCED ARRAY STUFF!!!!!!!!
// foreach
// When we call the foreach helper we pass in anonymous callback function
// called one time for every elememt in the array
// whatever is inside the function that logic happens

// const colors = ["teal", "blue", "red", "green"];

// colors.forEach((color) => console.log(color));

// // example 2
// const words = ["hello", "birds", "table", "football", "pipe"];
// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;

// function adder(number) {
//   sum += number;
// }

// numbers.forEach(adder);
// console.log(sum);

//THE MAP -- map() --a method that creates a  new array populated with the results of calling a provided  function on every element in the calling array.

// let numbers = [1, 2, 3, 4, 5];

// let double = numbers.map((num) => num * 2);
// console.log(double);

// let peoples = [
//   { firstName: "John", lastname: "Ndungu" },
//   { firstName: "Pesh", lastname: "Waceke" },
//   { firstName: "Allan", lastname: "Turin" },
// ];

// const results = peoples.map((person) => {
//   return [person.firstName, person.lastname];
// });
// console.log(results);

// let array1 = [1, 3, 5, 7, 8];
// const arraydoubled = array1.map((num) => num * 10);
// console.log(arraydoubled);

//The Filter
//filter() method allows one  to create a new array containing elements that pass a certain condition. based on a specified criteria
// const songs = [
//   { name: "Bohemian Rhapsody", duration: 5.55 },
//   { name: "Hotel California", duration: 6.3 },
//   { name: "Shape of You", duration: 3.53 },
//   { name: "Blinding Lights", duration: 3.2 },
//   { name: "Someone Like You", duration: 4.45 },
// ];

// console.log(songs);
// console.log(songs.filter((song) => song.duration > 4));

// // example 2
// const computers = [
//   { ram: 4, hdd: 100 },
//   { ram: 8, hdd: 200 },
//   { ram: 16, hdd: 300 },
//   { ram: 32, hdd: 400 },
// ];

// console.log(computers);
// console.log(computers.filter((comp) => comp.ram <= 16));

// // challenge1
// const ages = [32, 33, 16, 40];

// const Adults = ages.filter((adult) => adult > 18);
// console.log(Adults);

// //
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const greater = words.filter((word) => word.length > 6);
// console.log(greater);

//THE FIND METHOD
//find() -- find the first element in an array that matches a specific condition

// const peoples = [
//   { name: "John", age: 19 },
//   { name: "Mark", age: 22 },
//   { name: "Allan", age: 15 },
//   { name: "Betty", age: 17 },
// ];

// const res = peoples.find((person) => person.name === "Allan");
// console.log(res);

// const ages = [3, 10, 18, 20];
// const old = ages.find((age) => age > 18);
// console.log(old);

//reducer function -- helps you reduce or combine an array into a single value. It's commonly used with .reduce() method of arrays.

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((p, c) => {
  console.log(`previous: ${p}`);
  console.log(`current: ${c}`);
  return p + c;
}, 0);

const pupils = [
  { name: "Ndungu", age: 25 },
  { name: "Pesh", age: 19 },
  { name: "Kababa", age: 28 },
];

const oldestAge = pupils.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);
