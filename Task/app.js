/*
Athar Zaib
3513 
Orange Section*/


/*
!-------------------------- Question 1 ----------------------- !*/


// var input = prompt("Please enter your name");
// alert("Hi," + input);


/*!-------------------------- Question 2 ----------------------- !*/


/*var input = +prompt("Enter number for your table")
console.log("Multiplication Table of " + input)
if (input == ' ') {
    console.log(5 + "x" + "1" + "=" + 5 * 1);
    console.log(5 + "x" + "2" + "=" + 5 * 2);
    console.log(5 + "x" + "3" + "=" + 5 * 3);
    console.log(5 + "x" + "4" + "=" + 5 * 4);
    console.log(5 + "x" + "5" + "=" + 5 * 5);
    console.log(5 + "x" + "6" + "=" + 5 * 6);
    console.log(5 + "x" + "7" + "=" + 5 * 7);
    console.log(5 + "x" + "8" + "=" + 5 * 8);
    console.log(5 + "x" + "9" + "=" + 5 * 9);
    console.log(5 + "x" + "10" + "=" + 5 * 10);
} else {
    console.log(input + "x" + "1" + "=" + input * 1);
    console.log(input + "x" + "2" + "=" + input * 2);
    console.log(input + "x" + "3" + "=" + input * 3);
    console.log(input + "x" + "4" + "=" + input * 4);
    console.log(input + "x" + "5" + "=" + input * 5);
    console.log(input + "x" + "6" + "=" + input * 6);
    console.log(input + "x" + "7" + "=" + input * 7);
    console.log(input + "x" + "8" + "=" + input * 8);
    console.log(input + "x" + "9" + "=" + input * 9);
    console.log(input + "x" + "10" + "=" + input * 10);
}
*/





/*!-------------------------- Question 3 ----------------------- !*/


/*var city = prompt("Enter your city name")
if (city === 'karachi' || city === "Karachi")
 {
    alert("Welcome to the city of lights ! ");
}
else if {
    alert("Invalid Input"); */


/*!-------------------------- Question 4 ----------------------- !*/


/*var gender = prompt("Enter your gender")
if (gender === 'male' || gender === "Male") {
    alert(" Good Morning Sir ");
}
else if (gender === 'female' || gender === "Female") {
    alert(" Good Morning Ma’am ");
}
else if {
    alert("Invalid Input");
}

*/


/*!-------------------------- Question 5 ----------------------- !*/


/*var color = prompt("Enter color of the traffic signal");
if (color === 'red') {
    alert("vehicles must stop ");
} else if (color === 'yellow') {
    alert("vehicles should get ready to move");
} else if (color === 'green') {
    alert("vehicles can move now");
}else if {
    alert("Invalid Input");
*/


/*!-------------------------- Question 6 ----------------------- !*/

/*
var max = +prompt("Enter your max age ");
var cur = +prompt("Enter your current age ");

if (cur <= max) {
    console.log("You are welcome");

}
*/

/*!-------------------------- Question 7 ----------------------- !*/

/*
var fuel = +prompt(" Enter your remaining fuel in car (in litres) ");

if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("Your are good to go :) ");
}

*/


/*!-------------------------- Question 8 ----------------------- !*/

/*  var a = 4;                          //1
if (++a === 5) 
{
     alert("given condition for variable a is true");
     }
    //Output = given condition for variable a is true*/


/*var b = 82;                         //2
if (b++ === 83) 
{ 
    alert("given condition for variable b is true");
 }
 ////Output:- Undefined
 */


/*var c = 12;                           //3
if (c++ === 13) { alert("condition 1 is true"); }
if (c === 13) { alert("condition 2 is true"); }
if (++c < 14) { alert("condition 3 is true"); }
if (c === 14) { alert("condition 4 is true"); }
// Output : Condition 2 is true & Condition 4 is true */


/*var materialCost = 20000;             //4
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
// Output : The cost equals*/


/*if (true) { alert("True"); }          //5
if (false) { alert("False"); }
//Output :- True */


/*if ("car" < "cat") { alert("car is smaller than cat"); }  //6
//Output :- car is smaller than cat*/


/*!-------------------------- Question 9 ----------------------- !*/

/*
var marks1 = +prompt(" Enter your 1st subject marks ");
var marks2 = +prompt(" Enter your 2nd subject marks ");
var marks3 = +prompt(" Enter your 3rd subject marks ");

var total = +prompt(" Enter your total  marks ");

var comp = marks1 + marks2 + marks3;
console.log(comp);
var perc = (comp / total) * 100;
console.log(perc);


if (perc >= 80) {
    console.log("Your grade is : A-one")
    console.log("Excellent ")
} else if (perc >= 70) {
    console.log("Your grade is : A")
    console.log("Good ")
} else if (perc >= 60) {
    console.log("Your grade is : B")
    console.log("You need to improve ")
} else if (perc > 60) {
    console.log("Your grade is :Fail")
    console.log("Sorry")
}
*/


/*!-------------------------- Question 10 ----------------------- !*/


// ************ checkout process of a shopping cart system for an e-commerce website. ***********

/*var i1 = prompt("Name of item 1");
var i2 = prompt("Name of item 2");
var p13 = +prompt("Price of item 1");
var p14 = +prompt("Price of item 2");
var i13 = +prompt("Ordered quantity of item 1");
var i14 = +prompt("Ordered quantity of item 2");
var i7 = prompt("Shipping charges");

var cost = p13 + p14;


if (cost > 2000) {

    var dis = (10 * cost) / 100;
    var discount = cost - dis;

} else {
    discount = cost;
}


console.log("Price of " + i1 + " is " + p13);

console.log("Quantity of " + i1 + " is " + i13);


console.log("Price of " + i2 + " is " + p14);

console.log("Quantity of " + i2 + " is " + i14);

console.log("Shipping Charges " + i7);

console.log("Total Cost of your order is " + cost);

console.log("Discounted Price is " + discount);
*/


/*!-------------------------- Question 11 ----------------------- !*/

/*
var inp = +prompt("Enter your number");
var sec = 7;
plus = sec + 1;
min = sec - 1;

if (inp == sec || inp == plus || inp == min) {
    alert("Bingooo !!");
} else {
    alert("Try again");
}
*/


/*!-------------------------- Question 12 ----------------------- !*/


/*var div = +prompt("Enter your number to be divide");
if (div % 3 == 0) {
    alert("Divisible by 3")
} else {
    alert("Not Divisible by 3");
}
*/

/*!-------------------------- Question 13 ----------------------- !*/

/*var t1 = prompt("Enter your name team A");
var p1 = +prompt("Enter your points");

var t2 = prompt("Enter your name team B");
var p2 = +prompt("Enter your points");

if (p1 > p2) {
    console.log(t1 + " Wins");
}
else if (p2 > p1) {
    console.log(t2 + " Wins");
}
else if (p1 == p2) {
    console.log("Match ties");
}*/

/*!-------------------------- Question 14 ----------------------- !*/


/*var booleanValue = true;
var numericalValue = 92;
var stringValue = "Pakistan is a String";
a1 = alert(typeof booleanValue)
a2 = alert(typeof numericalValue)
a3 = alert(typeof stringValue)
*/

/*!-------------------------- Question 15 ----------------------- !*/


/*var div = +prompt("Enter your number to be divide");
if (div % 2 == 0) {
    alert("Number is even")
} else {
    alert("Number is odd");
}
*/

/*!-------------------------- Question 16 ----------------------- !*/
/*
var temp = +prompt("Enter your temperature for Karachi");
if (temp > 40) {
    alert("It is too hot outside");
} else if (temp > 30) {
    alert("The Weather today is Normal");
} else if (temp > 20) {
    alert("“Today’s Weather is cool");
} else if (temp > 10) {
    alert("“OMG! Today’s weather is so Cool");
}*/


/*!-------------------------- Question 17----------------------- !*/


/*
var a1 = +prompt("Enter your 1st number");
var a2 = +prompt("Enter your 2nd number");

var op = prompt("Enter your operator", "+    -    %      /       *");


if (op == '+') {
    console.log(a1 + "+" + a2 + " is " + (a1 + a2));
} else if (op == '-') {
    console.log(a1 + "-" + a2 + " is " + (a1 - a2));
} else if (op == '/') {
    console.log(a1 + "/" + a2 + " is " + (a1 / a2));
} else if (op == '*') {
    console.log(a1 + "*" + a2 + " is " + (a1 * a2));
} else {
    alert("Invalid Input");
}

*/


/*!-------------------------- Question 18----------------------- !*/

/*var day = prompt("Enter your day name");

if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {
    alert("It’s a week day");
} else if (day == 'saturday') {
    alert("It’s weekend");
} else if (day == 'sunday') {
    alert("Yay! It’s a holiday");
} else {
    alert("Invalid Input");

*/


/*!-------------------------- Question 19----------------------- !*/


/*var a1 = +prompt("Enter your score");

if (a1 > 50) {
    alert("You're Passed !");
} else {
    alert("Try Again! ");
}*/


/*!-------------------------- Question 20----------------------- !*/


/*var a1 = +prompt("Enter your 1st number");
var a2 = +prompt("Enter your 2nd number");

if (a1 > a2) {
    console.log("The greater number of " + a1 + " and " + a2 + " is " + a1);
} else if (a2 > a1) {
    console.log("The greater number of " + a1 + " and " + a2 + " is " + a2);
} else if (a1 = a2) {
    console.log("The greater number of " + a1 + " and " + a2 + " are both " + a1 + " & " + a2);
}

*/

/*!-------------------------- Question 21----------------------- !*/

/*var a1 = prompt("Enter your language", 'es   turk    en');

if (a1 === 'es') {
    alert("Hola World");
} else if (a1 === 'turk') {
    alert("Merhaba Duniya");
} else if (a1 === 'en') {
    alert("Hello world");
}
else {
    alert("Invalid Input"); */

/*!-------------------------- Question 22----------------------- !*/

/*var a1 = +prompt("Enter your number");
if (a1 >= 0) {
    alert("Number is positive");
} else {
    alert("Number is negative");
}*/

/*!-------------------------- Question 23----------------------- !*/

/*var noun = prompt("Enter your noun");
var number = +prompt("Enter your number");

if (number >= 2) {
    alert(number + ' ' + noun + "s");
} else {
    alert(number + ' ' + noun);
}*/