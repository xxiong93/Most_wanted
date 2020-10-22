//day 1
//variables are a key concept in programming, they are what hold data that we might need to move or change
//Counting, declare a new variable called 'counter' 
//getting info from user to display a small biography, starting with creating variables to capture various data points
//"use strict"
//enforces more rules

//let nameBox = prompt("Hello, what is your name?");
//let is declaring my variable forward and my variable is named nameBox
// after running this code the message box popped up on my browser and said "This page says" 
//and then successfully asked what the users name is.
// booleans in js ex
//let mikeIsAwesome = true;
//console.log(mikeIsAwesome)
//

//arithmetic operators
//+ Addition
//- Subtraction
/// Division
//++ Increment
//-- Decrement


//Order of Operations
//The order of operations can matter a lot when writing code:
//Parentheses
//Exponents
//Multiply/Divide
//Add/Subtract
//Left to Right


//Assignment Operators
//Operator Example Equivalent
//= x = y; x = y;
//+= x += y; x = x + y;
//-= x -= y; x = x – y;
//*= x *= y; x = x * y;
///= x /= y; x = x / y;
//%= x %= y; x = x % y;
//++ x++; x = x + 1;
//-- x--; x = x – 1


//Comparison Operators
//Operator Description
//=== equal value and equal type
//!== unequal value and unequal type
//== equal value
//!= unequal value
//> greater than
//< less than
//>= greater than or equal to
//<= less than or equal to
// a camparison expression will always result in a boolean
//let myName = "Joe"
//let yourName = "Liza"
//let areEqualNames = myName === yourName; //false
//
//let secondsInAMin = 60;
//let minInAHour = 60;
//let areEqualTime = secondInAMin === minutes inAHour; //true

////now i am creating more variables to my original code..
//"use strict"

//let nameBox = prompt("What is your name?");
//let birthState = prompt("Where were you born?")
//let numBrothers = prompt("How many brothers do you have?")
//let numSisters = prompt("How many sisters do you have?")
// successfuly asked prompt questions i told it to
// third question...
// in biography i dont want to sepreailty displey the number of brothers and the number of sisters
//i want the total number of siblings// so i am creating a new variable that will store just that.

//let sumOfTwoSiblings = numBrothers + numSisters;
// sum of two numbers is 50
//with all info ready im starting my biography
// im declaring another new number and it will be the large string
// first have to use a string concatenation to build our biography, combing 
//strings with the data from the variables
//let biography = "Hello! My name is " + nameBox + ". " +
//"I was born in the great state of " + birthState + ". " +
//"I have " + sumOfTwoSiblings + " siblings.";
//this should display my biography
//console.log(biography);
// it did not include my name and said i was born in the great state of 50 siblings. 
//update i corrected the name issue, will print whatever a person types. and it also says 
//where they where born. 
// decided to move forward I was only able to add the numbers beside each other not addition 
// example the console says "Hello! My name is Jordan. I was born in the great state of indiana.
//I have 17 siblings. "

//update to this one let numberOne = 2; let numberTwo = 3; let sum = numberOne + numberTwo;
//console.log(sum);







// day 1 fun with conditionals 
// conditionals give us the ability to allow certain blocks of code to execute only when some
//condition is true. Conditionals are usually in the form of an if/else statement
//An if/else statement -always starts off with an 'if' clause
//  				   -may contain any number of 'else if' clauses
//					   -may optionally end with and 'else' clause		
//						-an else clause cannot have a condition
//					   -an 'elde' clause will ALWAYS represent the end of the 'if/else'
//
//An 'if' statement allows us to execute a block of code only if a condition set by us is true
//The condition we set should alwyas be an expression that evaluates to true or false
//let pokemon;
//pokemon = "Pikachu";
//if(pokemon === "Pikachu") {
//	console.log("Pikachu, I choose you!")
//} in english this would read as "If" 'pokemon' is "Pikachu", do this stuff".
//if/else clause allows us to add another condition to analready existing 
//
//
//if/else statement 
//let petName = "Loki"
//if(petName === "Murdock") {
//	console.log("He's the orange cat!");
//}
//else if(petName === "Loki") {
//	//console.log("Loki is gray.")
//}
//let petName = "Rowdy";
//if(petName === "Murdock" || petName === "Loki") {
//console.log("Meow");
//}
//else {
//	console.log("That pet isn't one of mine.");
//}
//
//
//if/else example
//let userInput = prompt("Which football team is best?");
//if(userInput === "Georgia") {
//	alert("Go Bulldogs go!");
///}
//else if(userInput !== "Alabama") {
//	alert("That team's okay.");
//}
//else {
//	alert("Georgia is Best!");
//}
//
//Aswitch/case statement is another way for is to write a conditional with a few caveats
//A switch/case only has the abolity to check for equality, useful for things like menus
//switch(userInput) {
//	case "1":
//	console.log("Attacking!");
//	break;
//	case "2":
//	console.log("Defending!");
//	break;
//	case "3":
//	console.log("Evading!");
//	break;
//	default:
//	console.log("Whoops,try again!");
//	break;
//}
//Converting String to Number
//
//
//.parseInt() takes a String as a first argument, and a base to which that String will be converted to. This method always returns an integer.
//.parseFloat() takes a String as an argument, and returns the Float point number equivalent.
//Math.floor() is used to round an integer or floating point number. It returns the nearest integer rounded down.
//Math.ceil() can be used to round an integer or floating point number.
//Unary Operator By adding a + sign before a String, it will be converted into a number if it follows the right format.
//Multiply by 1
//If a String is multiplied by the primitive number 1, the string will become a number.















//
//conditional statements are useful can be used as many times as i want 
//start by declaring a variable that holds the users age

let yoAge = prompt("What is your age");
let yoDrivers = prompt("Do you have a drivers licences? ")
let newNumber = ['']
//then if clause (or else if clause) has its own parenthesis with a boolean expression
//somthing true or false
yoAge = parseInt(yoAge);
if(yoAge >= 16){
alert("Your older then 15.");
}
//
//	//I have yoAge being anything greater then or unequal to 16 log 
//	console.log("You are not old enough to drive! ");
//}
//
//	{
//	//inside of the if code block i created a new varible to hold if the user has a drivers licences
//	
	else if(yoDrivers === "yes"){

	console.log("You can legally drive!");
}
// my new if/else statment  
//}//and my else is the condition set to go if the user says they are younger then 16
//else {
//console.log("Sorry, your not old enough to drive:(");
//}
//worked good on the console// until i tried adding another if/else statement


//Day three
//problems to solve fizz buzz
// write a program that prints out every number from 0 to 100 to console
// write a loop set condition to increase by 1 till it reaches 100 then loop wont continue
//if numbeer is divisible by 3, print 'fizz' instead of the number
// i started with setting i
// for(let i = 0; i < 100; i++){
	
// 	if(i % 3 == 0 && i % 5 == 0){
// 		console.log("fizzbuzz");
// 	}
//  else if(i % 3 == 0){
//  	console.log("fizz");
//  }
// else if(i % 5 ==0){
// 	console.log("buzz");
// }
// else{
// 	console.log(i);
// }
// }
//reverse a string
//let alpha = prompt("Please enter a word to reverse")
//let newStr = ""


//for (let i = alpha.length - 1; i >= 0; i--){

  //newStr = newStr + alpha[i];

//}

//console.log(newStr)
//console.log(alpha[0]);
//const newStr = str.split('');

//Capitalizatin of a letter
//writing a code that takes a string as input and capitialize a letter of each word.
//"use strict"


//function Capitalizer(stringWord) {

//let stringArray = stringWord.split('');
//for (let i = 0; i < stringArray.length; i++)
 //bravobravo[0];

//for (let i = 0; i <12 ; i++){

////deltaAirline.push('C++');

//function capatlize (string) {
//console.log(string[0 && 6].toUpperCase() + string.slice(1))
//capatlize("hello world")

//instructors code for capatilizing the begeinning of each word.
//"use strict"



//function Capitalizer(stringWord) { 

//let stringArray = stringWord.split('');
 //for (let index = 0; index < stringArray.lenght; index++) {
 	//if (index === 0) {
 		//stringArray[index]= stringArray[index].toUpperCase();

 	//}
//else if (stringArray[index-1] === ' '){

//}

//else{

//}
//}
//stringArray = stringArray.join('');
//console.log(stringArray);
//}
//capitalizer("capitalize the first letter")



 //	console.log(stringArray.length;index)
 //}

 //	= 0; index = string.length)}

	//console.log.Functi



//compress a string of characters
//9for example an input of "aaaaabbbbbcccbbbccaaa" will compress to "5a"

//"use strict";
//function HowToSolve(){



//}

// what is an array?
//an array is a data structurethat allows us to store multiple values in a single variable
//to declare an array in javascript use square brackets []
//let packersPlayers =['Rodgers' , 'Matthews' , 'Cobb' , 'Jones'];
//let rodgers = packersPlayers[0];
//let cobb = packersPlayers[2];
//accessing the elements of an array, each element of an array has an index that starts 
//at [0] and increment from there





// number 5 palindrome is a word or phrase or sequence that reads the same backward as farward
// i.e madam 
//write a code that takes a user input to see if it is a Palindrome and reports the results
