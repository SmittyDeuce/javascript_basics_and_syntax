/* Problem Statement: You are tasked with developing a student management system for a school.
   Your task is to create a JavaScript program that declares variables to store information about students, 
   such as their names, ages, grades, and attendance status. */

// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
let student_name = "John Doe"; // Variable to store the student's name
let age = 17;                  // Variable to store the student's age
let grade = "12th";            // Variable to store the student's grade
let attendance_status = false; // Variable to store whether the student is present or not

// Display initial values
console.log("Task 1:", student_name); // Output the student's name
console.log("Task 1:", age);          // Output the student's age
console.log("Task 1:", grade);        // Output the student's grade
console.log("Task 1:", attendance_status); // Output the student's attendance status

// Task 2: Assign sample values to the student information variables.
student_name = "Alice"; // Update the student's name
age = 15;              // Update the student's age
grade = "10th";        // Update the student's grade
attendance_status = true; // Update the student's attendance status

// Display updated values
console.log("Task 2:", student_name); // Output the updated student's name
console.log("Task 2:", age);          // Output the updated student's age
console.log("Task 2:", grade);        // Output the updated student's grade
console.log("Task 2:", attendance_status); // Output the updated student's attendance status


/* Problem Statement: You are tasked with developing a simple calculator program in JavaScript.
   Your program should be able to perform basic arithmetic operations such as addition, subtraction, 
   multiplication, and division. */

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1 = 0; // Variable to store the first numeric value
let num2 = 0; // Variable to store the second numeric value

// Task 2: Assign sample numeric values to the variables declared in Task 1.
num1 = 16; // Update the first numeric value
num2 = 64; // Update the second numeric value

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
console.log("Sum:", num1 + num2);           // Output the result of addition
console.log("Difference:", num1 - num2);    // Output the result of subtraction
console.log("Product:", num1 * num2);       // Output the result of multiplication
console.log("Quotient:", num2 / num1);      // Output the result of division

// Task 4: Explore assignment operators and update the values of variables.
num1 = 444; // Update the first numeric value
num2 = 67;  // Update the second numeric value

console.log("Updated num1:", num1); // Output the updated first numeric value
console.log("Updated num2:", num2); // Output the updated second numeric value

// Task 5: Use comparison operators to compare the values of variables.
console.log("Is num1 equal to num2?", num1 === num2); // Check if num1 is equal to num2
console.log("Is num1 greater than num2?", num1 > num2); // Check if num1 is greater than num2
console.log("Is num1 not equal to num2?", num1 != num2); // Check if num1 is not equal to num2

// Task 6: Apply logical operators to combine conditions and display the results.
let isPositive = num1 > 0 && num2 > 0; // Check if both numbers are positive
let isEven = num1 % 2 === 0 || num2 % 2 === 0; // Check if at least one number is even

console.log("Are both numbers positive?", isPositive); // Output if both numbers are positive
console.log("Is at least one number even?", isEven);   // Output if at least one number is even
