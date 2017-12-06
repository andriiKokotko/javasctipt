//alert('Hello World!');
//document.write('<h2>Hello World!</h2>');
//console.log('Hello World!');

// var messageForUser = 'Hello';// var - застарілий
// document.write(messageForUser);

// document.write('<br>');

// var userAge = 19;
// document.write(userAge);

// let userProfeshion = 20;
// document.write(userProfeshion);

// const favColor = 'red';

// Data types
// ES5
let someString = 'Hello World!'; // string
let age = 50; // number
let isMale = true; // boolean (true or false)
let unknovn = undefined; // undefined
let empty = null; // null
let obj = {}; // object
//ES2015
let sym = Symbol(); // symbol

const userName = prompt('Enter Your name');
const greetings = 'Hello ' + userName;
document.write(greetings);

// const userAge = Number(prompt('Enter your age'));
// const userAge = parseInt(prompt('Enter your age'));
const userAge = parseFloat(prompt('Enter your age'));
const nextAge =Math.round(userAge + 1);
document.write('Next year you will be ' + nextAge);
document.write('<br>');
if (userAge < 18) {
    document.write('Child');
} else {
    document.write('Adult');
}

document.write('<br>');

function sum(a, b, c) {
    const result = a + b - c;
    return result;
}

const calc = sum(3, 6, 5);
document.write(calc);

