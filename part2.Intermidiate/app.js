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

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(3));

const multiply = (a, b = 1) => a * b;

console.log(multiply(4));
