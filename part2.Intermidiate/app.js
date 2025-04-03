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

function greet(username) {
  return `Hello ${username}`;
}
console.log(greet("John"));

// now the arrow function way
greet = (username) => `Hello ${username}`;

console.log(greet("John"));

const double = (number) => number * 2;
console.log(double(4));
