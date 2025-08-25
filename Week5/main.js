// variables
// this is how we find an element
const documentBody = document.querySelector("body");
console.log(documentBody);

const myName = "huihyun";
let myHungriness = 0.3;
console.log(myHungriness);
myHungriness = 0.5;
console.log(myHungriness);

// console.log() sends message to browser console
console.log("hello");

let stepNumber = 4;
console.log("Taking step:", stepNumber, "...i think");

// let name = prompt("What's your name?");

//stings
let firstName = "huihyun";
let surname = "Kim";
let quote = "This is a 'quote'";
console.log(quote);
let nameString = `My full name 

is ${firstName} ${surname}`;

//type conversion
let myAge = 37;
let timePass = "5";
let updateAge = myAge + parseInt(timePass);

// math operators + - = / *

console.log(updateAge);

// arrays
let myPets = ["spot", "joey", "charlie", "lola"];

console.log(myPets);
console.log(myPets.length);

// conditionals

if (myAge < 40) {
  documentBody.style.backgroundColor = "red";
} else {
  documentBody.style.backgroundColor = "blue";
}

let hiddenVariables = "?";
// functions
function tellMeHowHungryIAm() {
  console.log(hiddenVariables);
}
