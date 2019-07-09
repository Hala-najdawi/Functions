/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('ball player', 'spain', 'Shaq', 3);
=> "You will be a ball player in spain, and married to Shaq with 3 kids."
*/

function tellFortune(jt,gl,pn,noc){
	console.log("You will be a" ,jt,"in",gl,",and married to", pn, "with",noc,"kids");
}
tellFortune('programmer','france','z','3');

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(dogAge)
{
	var result = dogAge / 7;
	return result;
}
console.log(calculateDogAge(35));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay)
{
	var maxAge = 100;
	var result = (amountPerDay*365)* (maxAge - age);
	return result;
}
console.log(calculateSupply(30,3));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/

function greet(name)
{
	return "hello " + name ;
}
console.log(greet("Jouzaa"))

/*
5
what is the error:
function double(cat) {
  return 2 * x; (error is here, x is not defined)
}


function double(7) { /error is here, using number rather than var)
  return 2 * 7;
}

function double('7') {/error is here, using string rather than var)
  return 2 * 'x'; (error is here also, using string x rather than var x)
}
*/





/*fix these functions:*/
function double1(x) {
  return 2 * x ;
}

function double2 (x)
{
return 2 * x;
}

function double3 (x)  {
  return 2 * x;
}




/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num){
	var c=num**3;
	/*num=num**3;*/
	return c;
}
console.log(cube(4));

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12

*/
function multiply(num1,num2){
var result=num1*num2;
return result;
}
console.log(multiply(3,4));
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

*/
function canIGetADrivingLicense(age){
	if(age>=20){
		console.log("yes you can");
	}
	else
		console.log("please come back after",(20-age),"years to get one");
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(15);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1,str2){
	if (str1.length === str2.length){
		return "true";
	}
	else
		return "false";
}
console.log(sameLength('tree','clue'));
console.log(sameLength('tree','car'));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNumber(num1,num2){
	if(num1>=num2){
		return num1;
	}
	else
		return num2;
}
console.log(largerNumber(5,6));
console.log(largerNumber(5,3));/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5
*/
function smallerNumber(num1,num2,num3){
	if(num1<=num2 && num1<=num3){
		return num1;
	}
	else
		if(num2<=num1 && num2<=num3)
			return num2;
		else
			return num3;
}

console.log(smallerNumber(8,6,7));
console.log(smallerNumber(5,99,34));
console.log(smallerNumber(5,99,3));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by
*/

function shorterString (str1, str2, str3, str4, str5)
{
	if(str1.length<=str2.length &&str1.length<=str3.length && str1.length<=str4.length && str1.length<=str5.length)
		return str1;
	else
		if(str2.length<=str1.length &&str2.length<=str3.length && str2.length<=str4.length && str2.length<=str5.length)
			return str2;
		else if(str3.length<=str1.length &&str3.length<=str2.length && str3.length<=str4.length && str3.length<=str5.length)
				return str3;
			else
				if(str4.length<=str1.length &&str4.length<=str3.length && str4.length<=str2.length && str4.length<=str5.length)
					return str4;
				else
					return str5;
}
console.log(shorterString("aaaaa","dd","bbbbbbbb","ccc","sb"));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: shorterString("air","school","car","github")
=> school
*/

function longerString (str1, str2, str3, str4)
{
		if(str1.length>=str2.length &&str1.length>=str3.length && str1.length>=str4.length)
		return str1;
	else
		if(str2.length>=str1.length &&str2.length>=str3.length && str2.length>=str4.length)
			return str2;
		else
			if(str3.length>=str1.length &&str3.length>=str2.length && str3.length>=str4.length)
				return str3;
			else
				return str4;
}

console.log(longerString("airaaaaa","school","car","githubwwwwwwww"));

//ANOTHER SOLUTION

// function longerStrings (str1, str2, str3, str4)
// {

// 		return Math.max(str1.length, str2.length, str3.length, str4.length, str5.length);
// }

// console.log(longerString("airaaaaa","school","car","githubwwwwwwww"));


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
function isEven(num)
{
	if ( num % 2 === 0)
		return "true";
	else
		return "false";
}
console.log (isEven(-4));
console.log (isEven(5));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/

function isOdd(num)
{
	if ( num % 2 !== 0)
		return "true";
	else
		return "false";
}
console.log (isOdd(-4));
console.log (isOdd(5));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/



function positive(num)
{
	if ( num >= 0)
		return num;
	else
		return num * -1;
}
console.log (positive(4));
console.log (positive(-100));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(fn,ln)
{
	var fulln=fn + " " + ln;
	// return fn +" " + ln;
	return fulln;
}
console.log(fullName("Deyaa","hala"));

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/

function avg (n1,n2,n3,n4,n5)
{
	var sum = n1 + n2 + n3 + n4 + n5;
	return sum / 5;
}
console.log(avg(1,2,3,4,5));
console.log(avg(5,7,9,3,5));

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/

function randomNumber ()
{
	return Math.random();
}
console.log(randomNumber());

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/

function randomBetweenNumbers (n1,n2)
{
	var max , min;
	if (n1 >= n2)
	{
		min = n2;
		max = n1 - min;
		
	}

	else
	{
		min = n1;
		max = n2 - min ;
		
	}

	return Math.random() * max + min;

}
// randomBetweenNumbers(5,8);
console.log(randomBetweenNumbers(3,6));
console.log(randomBetweenNumbers(6,11));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: scoreInUniversty(3)
=> "F"
Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(mark)
{
	if (mark>=95 && mark <=100)
		return "A";
	if (mark>=85 && mark <=94)
		return "B";
	if (mark>=70 && mark <=84)
		return "C";
	if (mark>=50 && mark <=69)
		return "D";
	if (mark>=0 && mark <=49)
		return "F";
}
console.log(scoreInUniversty(71));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/

var x = 0;
function counter ()
{
	x = x + 1;
	return x;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/
console.log("_________________________");
function resetCounter ()
{
	console.log(x, "and the counter reset now");
	x = 0;

}
resetCounter();
console.log(counter());
console.log(counter());
console.log(counter());
resetCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/*
25
// this question is in progress wait
Write a function called guessMe
that will take an argument (number)
if the number not between 0 and 5 [0,1,2,3,4]
it will return "Please insert a number between 0 and 5"
if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
will return "you guess me correctly"
if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
will return "you didnt guess me I was 3"
Ex: guessMe(0)
=> "you didnt guess me I was 3"
Ex: guessMe(10)
=>"Please insert a number between 0 and 5"
Ex: guessMe(-5)
=> "Please insert a number between 0 and 5"
Ex: guessMe(3)
=> "you guess me correctly"
*/



