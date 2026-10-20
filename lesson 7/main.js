// TASK 7.1: VARIABLE PRACTICE

// 1. String: your name
let myname = "Michael Yugi";

// 2. Number: your age
let age = 22;

// 3. Boolean: whether you are a student
let isStudent = true;

// 4. Array: your favorite colors
let favoriteColors = ["Blue", "Black", "White"];

// 5. Date: today's date
let today = new Date();

// Display the information
console.log("My name is:", myname);
console.log("My age is:", age);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// Check the data types
console.log("Name data type:", typeof myname);
console.log("Age data type:", typeof age);
console.log("Student data type:", typeof isStudent);
console.log("Colors data type:", typeof favoriteColors);
console.log("Date data type:", typeof today);

// TASK 7.2: NUMBER OPERATIONS

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

// Increment and decrement
let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

// STRING OPERATIONS

let firstName = "Michael";
let lastName = "Yugi";

// Join two strings
let fullName = firstName + " " + lastName;

console.log("Full name:", fullName);

// Template literals
let greeting = `Hello, ${firstName}!`;

console.log(greeting);

// Find the length of a string
console.log("Number of letters:", firstName.length);

// Convert to uppercase
console.log("Uppercase:", fullName.toUpperCase());

// Convert to lowercase
console.log("Lowercase:", fullName.toLowerCase());

// Get the first character
console.log("First letter:", firstName.charAt(0));

// Check whether the name contains Michael
console.log("Contains Michael:", fullName.includes("Michael"));

// COMPARISON OPERATORS

console.log("Is 5 greater than 3?", 5 > 3);
console.log("Is 5 less than 3?", 5 < 3);
console.log("Is 5 equal to 5?", 5 === 5);
console.log("Is 5 equal to string 5?", 5 == "5");
console.log("Is 5 different from 3?", 5 !== 3);

// LOGICAL OPERATORS

console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);

// AGE CALCULATOR

let myAge = 22;

// Approximate age in days
let ageInDays = myAge * 365;

// Approximate age in hours
let ageInHours = ageInDays * 24;

// Year you will turn 100
let currentYear = new Date().getFullYear();
let yearTurning100 = currentYear + (100 - myAge);

console.log("My age in years:", myAge);
console.log("My approximate age in days:", ageInDays);
console.log("My approximate age in hours:", ageInHours);
console.log("Year I will turn 100:", yearTurning100);