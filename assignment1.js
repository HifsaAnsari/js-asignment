// Q1
var name = "hifsa"
alert("my name is  \n hifsa ")
    //Q2
var birthYear;
birthyear = 1996;
alert(" type of birth year is number" + typeof birthYear);

//Q4
var age = prompt("enter your age");
var days = age * 365;
alert("enter your age" + days)



//q5
// Create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input)//
var num = prompt("entr the number");

const increment = function(number) {
    return ++number
}
var y = increment(num);
console.log(y);
//q6
//   Create a function that takes a number as an argument, decrements the number by -1 and returns the result.//
var num = prompt("entr the number");
const decrements = function(number) {
    return --number
}
var y = decrements(num);
console.log(y);

//q7
// // Create a function that takes a number and return square of a number//
var num = prompt("entr the number");
const square = function(number) { return number * number }
var x = square(num)
console.log(x)

//Q8
// check if the entered number is a positive or a negative integer

number = prompt("Pick a number?");
if (number > 0) {
    alert("positive");
} else if (number == 0) {
    alert("00000000");
} else {
    alert("negative!");
}

// or 
// var num=prompt("entr the number"); 
if (num > 0) {
    alert("positive");
} else {
    alert("negative!");
}
//Q9
var usdollar = 10;
var suiriyal = 25;
var pakistanirupees = usdollar * 163 + suiriyal * 43;
console.log(pakistanirupees);
//Q10
//What will be the output in variables a, b & result after execution of the following script:
//var a = 2,
//b = 1;
// --a=1;
// --a - --b=1;
// --a - --b + ++b = 3,
// --a - --b + ++b + b-- = 5;
//Q11

// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” if enter lahore, display "welcome to historical city" if Quetta display message "welcome to cold city"
city1 = "karachi";
city2 = "Quetta ";
city3 = "lahore";
var a = prompt("entr the city");
if (a == city1) {
    alert("Welcome to city of lights");
} else if (a == city3) {
    alert("welcome to historical city");
} else {
    alert("welcome to cold city");
}


//Q12
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));

var result;

if (operator == '+') {
    result = number1 + number2;
} else if (operator == '-') {
    result = number1 - number2;
} else if (operator == '*') {
    result = number1 * number2;
} else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);