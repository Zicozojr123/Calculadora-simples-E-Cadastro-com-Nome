let name = prompt("What is your name?");
let surname = prompt("What is your surname?");
let study = prompt("What is your area of study?");
let birth = parseFloat(prompt("What is your Birth date?"));

let year = "2024" - birth;

alert(
  "Your Login is" +
    name +
    surname +
    "\n Your Study area is" +
    study +
    "\n Your age is" +
    year
);
