// string, number, boolean, undefined, null, symbol, object

let newstring = 'This is "brand" new item'; // string- takes in any character enclosed in quotes

let isLogged = false; // Boolean(can either be true or falase)

let rate = 12.5; // Number data type which can take both whole numbers and decimals

let count; // undefined

// console.log(color) // not defined

console.log(count); //undefined

let color = null; // null

console.log(color); // null

// symbols + - * / > = 

// reference data types - object & arrays , linked lists, stack, hash maps

// object
let cup = {
    color: "green",
    hasHandle: true
}

console.log(cup.color)
console.log(cup.hasHandle)

// array
let colors = ["black", "white", "green"]
console.log(color)

// passing by value  vs passing by reference


let person = {
    name: 'Brian',
    age: 21,
    isKenyan: true,
    "Date of Birth": "17th June"
}

let numbers = [1,2,3,[70,97]]

console.log(typeof person.name) // dot notation // string
console.log(typeof person['Date of Birth']) // bracket notation
console.log(typeof person.isKenyan) // Boolean

