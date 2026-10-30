// TASK 7.1: VARIABLE PRACTICE

// 1. String: your name
let myname = "Tupac Shakur";

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

let firstName = "Tupac";
let lastName = "Shakur";

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

// ===================================
// TASK 7.3: FUNCTIONS
// ===================================

// 1. Calculate the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

console.log("Rectangle area:", calculateArea(5, 4));


// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("Temperature:", celsiusToFahrenheit(25), "°F");


// 3. Check whether a number is even
function isEven(number) {
    return number % 2 === 0;
}

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));


// 4. Get initials from a full name
function getInitials(fullName) {
    return fullName
        .trim()
        .split(/\s+/)
        .map(name => name[0].toUpperCase())
        .join("");
}

console.log("Initials:", getInitials("Michael Yugi"));


// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reversed name:", reverseString("Michael"));


// 6. Function with default parameters
function greetPerson(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetPerson());
console.log(greetPerson("Michael"));
console.log(greetPerson("David", "Hi"));


// 7. Calculate a tip
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip amount:", calculateTip(1000));
console.log("Tip at 20%:", calculateTip(1000, 20));

// ===================================
// TASK 7.4
// ===================================

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Score 95:", getGrade(95));
console.log("Score 85:", getGrade(85));
console.log("Score 75:", getGrade(75));
console.log("Score 65:", getGrade(65));
console.log("Score 45:", getGrade(45));

// ===== JavaScript Calculator Mini-Project =====

// Addition
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Division
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero!";
    }

    return num1 / num2;
}

// Main calculator function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            if (num2 === 0) {
                return "Error: Cannot calculate remainder with zero!";
            }
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Error: Invalid operator!";
    }
}

// Test the calculator
console.log("===== Calculator Results =====");

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 3 =", calculate(2, "**", 3));

console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 ? 5 =", calculate(10, "?", 5));

// ===================================
// TASK 7.4: LOOPS
// ===================================

// 1. FOR LOOP
console.log("FOR LOOP");

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// 2. WHILE LOOP
console.log("WHILE LOOP");

let number = 1;

while (number <= 5) {
    console.log("Number:", number);
    number++;
}

// 3. DO...WHILE LOOP
console.log("DO...WHILE LOOP");

let countNumber = 1;

do {
    console.log("Number:", countNumber);
    countNumber++;
} while (countNumber <= 5);