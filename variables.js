// var , let , const

var name = "heraniah"; // es5 // function scoped

if (true) {
  var number = 5;
  let letter = "j";
  // console(letter) //let and const varables are block scoped
}
// console.log(number) // var variables are function scoped(accessible outside some code blocks but not outside the function it is defined in)

let age = 22; // es6 // block-scoped variables
age = 23; //re-assigning a variable to a new value

const isTall = false; // es6
// isTall = true // TypeError - re-assign a value to a constant variableS

console.log(age);
console.log(isTall);

// console.log(name);
