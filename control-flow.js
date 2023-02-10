// sequence , selection, looping/iteration

// if statement

let condition = true;
if (condition) {
  // run if condition is truthy
  //ignore if condition is  falsy
  console.log("code block excuted!!!");
}
let error;
let admin;
if (error) {
  console.log("render error page");
} else {
  if (admin) {
    console.log("render admin panel");
  } else {
    console.log("render home page");
  }
}

// for loop

for (let i = 0; i < 10; i++) {
  console.log("iteration number" + i);
}
// ++j , j++ (preIncrement and postIncrement) in js
// let j = 0;
// j++; // j = j+1 // j=1
// j++; // j = j+1 // j=2
// j++; // j = j+1 // j=3
// console.log(j);

// while loop
let x= 0
while (x < 90) {
  console.log("Running" + x);
  x = x+5
}
