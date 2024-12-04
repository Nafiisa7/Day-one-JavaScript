// Day one
const firstName = "nefiisa";
let age = 111;
 //template strings
 let message = `hello my name is ${firstName} and i'm ${age}`;
 console.log(message);

 //primitive data types
 isStudent = true;  // boolean
 isGraduated = false; // boolean
 let myAge = 111;  //number
 let greeting = "hello"; //string

//  dynamic typing
let variable = "javaScript";
console.log(typeof variable); //string
let urScore = 99;
console.log(typeof urScore) //number

// arithmetic operators
let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// assignment operator
let x = 10;
x+=5; // x= x_5
console.log("updated x: " + x);

//comparison operators
console.log("Is num1 greater than num2?" + num1 > num2);
let number1 = 2;
let number2 = "2";
console.log("Is num1 equal to num2?", number1 == number2);
console.log("Is num1 equal to num2?", number1 === number2);

// conditional statements 
// if else
// Grade Checker
let score = prompt("Enter your score:");
score = parseInt(score);

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// // // Ternary operator 
let passOrFail = score >= 50 ? "Pass" : "Fail";
console.log("Result:", passOrFail);

// // switch statement
// project 1:  weekday checker
let weekDay = prompt("Enter a number (1-7) for the day of the week");
weekDay = parseInt(weekDay);
switch(weekDay){
case 1:
    console.log("saturday");
    break;
  case 2: 
  console.log("sunday");
    break; 
    case 3:
        console.log("monday");
    break; 
    case 4:
        console.log("tuesday");
    break; 
    case 5:
        console.log("wednesday");
    break; 
    case 6:
        console.log("thursday");
    break; 
    case 7:
        console.log("friday");
    break; 
    default: console.log("Invalid number. Please enter a number between 1 and 7.");
}

// project 2: fruit category

let fruit = prompt("Enter a fruit name:").toLowerCase();
switch (fruit) {
  case "apple":
  case "pear":
    console.log("Pome fruit");
    break;
  case "banana":
  case "mango":
    console.log("Tropical fruit");
    break;
  case "strawberry":
  case "blueberry":
    console.log("Berry");
    break;
  default:
    console.log("Unknown fruit");
}

// project 3: simple calculator
let firstNum = parseFloat(prompt("enter the first number: "));
let operator = prompt("Enter an operator (+, -, *, /):");
let secondNum = parseFloat(prompt("enter the second number: "));
switch(operator){
    case "+":
        console.log("result: " , firstNum + secondNum);
        break;
    case "*":
        console.log("result: " , firstNum * secondNum);
        break;
    case "-":
        console.log("result: " , firstNum - secondNum);
        break;
    case "/":
        if(secondNum ==! 0){
            console.log("result: ", firstNum / secondNum);
        }else{
            console.log("Error: Division by zero is not allowed.");
        }
        break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /.");
}

// project 4: grade checker using switch
let grade = prompt("Enter your grade (A, B, C, etc.):").toUpperCase();
switch(grade){
    case "A":
        console.log("excellent");
        break;
    case "B":
        console.log("good job");
        break;
    case "C":
        console.log("Needs improvement");
        break;
        default:
            console.log("invalid grade")
}

//project 5: Range Identifier
let number = parseInt(prompt("enter a number: "));
switch(true){
    case number < 10:
        console.log("small");
        break;
        case number >= 10 && number <= 20:
            console.log("Medium");
            break;
            case number > 20:
                console.log("large");
                break;
                default:
                    console.log("Unknown range");
}
