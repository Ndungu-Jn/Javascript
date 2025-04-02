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

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("John");
