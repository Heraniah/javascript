const animal = {
  kingdom: "Animalia",
  class: "reptile",
  legs: 4,
  layEggs: null,
  communicate: function (way) {
    console.log("This animal" + way);
  },
};

let dog = Object.create(animal);

// console.log(dog.communicate("Barks"));
dog.class = "mammal";
dog.layEggs = false;

console.log(dog.toString());

let name = "Heraniah"; // initializing a string

// string Methods
console.log(name.toUpperCase());
console.log(name.split("b"));

let numbers = [1, 2, 8, 6, 8, 9, 3, 5, 1, 3, 2];
numbers.push("Hello");
console.log(numbers);
