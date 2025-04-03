// //Arrays -- 0 index based
// // empty array
// // let myList = [1, 2, 3, 4, 5];
// // console.log(myList);

// const fruits = ["apples", "pomegranate", "mango"];
// const moreFruits = ["strawberries", "pineapple", "grapefruit"];
// const totalFruits = fruits.concat(moreFruits);

// console.log(totalFruits);
// // fruits.push("banana");
// // console.log(fruits);

// // fruits.pop();
// // console.log(fruits);

// // fruits.shift();
// // console.log(fruits);

// // fruits.unshift("orange");
// // console.log(fruits);

//Objets -- key value arrangement -- basivally  like dictionariesin python

// const person = {
//   //  key     //Value
//   firstName: "Ndungu",
//   lastName: "what",
//   age: 25,
//   location: ["planet", "Earth"],
//   isProgrammer: true,
// };

// console.log(person);
// // accessing Items

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.location);
// console.log(person.lastName);

// const car = {
//   type: "Nissan",
//   model: "prado",
//   color: "indigo",
// };

// console.log((car.type = "Toyota"));
// console.log(car);

// car.wheels = 4;
// console.log(car);

//Functions

//function name(){...arguments.}
// function greet() {
//   console.log("Hello from a function");
// }

// // call the function now.
// greet();

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello("John");

// function add(x, y) {
//   return x + y;
// }

// const result = add(10, 20);
// console.log(result);

// function myFunction(x, y) {
//   return x * y;
// }

// const solution = myFunction(4, 4);
// console.log(solution);

//function Declaration  -- not stored in a variable
// function sayHello(username) {
//   console.log(`Hello ${username}`);
// }

// sayHello("Ndungu");

// //Function Expression  --  stored in a variable
// const greetings = function (user) {
//   console.log(`Hello ${user}`);
// };
// greetings("John");

//  callback Functions -- when we provide functions as an argument to other function. that is known as callback functions

// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }
// showCallFunc(function (value) {
//   console.log(value);
// });

// function greet(name, cb) {
//   console.log(`Hello ${name}`);
//   cb();
// }

// function cb() {
//   console.log("I am the callback function");
// }

// greet("John", cb);

// function showCallFunc(fn) {
//   const ten = 10;
//   fn(ten);
// }

// function fn(ten) {
//   console.log(ten);
// }

// showCallFunc(fn);

//Methods
//basically, it a function inside an object

//Thisis the kienyeji way
// function greet() {
//   return `Hello, my name is ${person.name} & I am ${person.age} years old`;
// }

// const person = {
//   name: "John",
//   age: 25,
//   greet,
// };

// console.log(person.greet());

// this is the right way.
// const person = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     return `Hello, my name is ${person.name} & I am ${person.age} years old`;
//   },
// };

// console.log(person.greet());

//JSON -- Javascript object notation

// DATES

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
