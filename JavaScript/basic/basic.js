// #Convert Celsius to Fahrenheit

function convertToF(celsius) {
	let fahrenheit = (celsius * (9 / 5)) + 32;
	return fahrenheit;
}

console.log('#Convert Celsius to Fahrenheit');
console.log('0º C is ', convertToF(0), 'ºF');
console.log('-30º C is ', convertToF(-30), 'ºF');
console.log('-10º C is ', convertToF(-10), 'ºF');
console.log('0º C is ', convertToF(0), 'ºF');
console.log('20º C is ', convertToF(20), 'ºF');
console.log('30º C is ', convertToF(30), 'ºF');


// #Reverse a String

function reverseString(str) {
	let strArray = [];

	for (let i = 0; i <= (str.length - 1); i++) {
		strArray.push(str.charAt(i));
	}

	let strInvert = strArray.reverse().reduce((acum, curr) => acum + curr);
	return strInvert;
}

console.log('---------------------------');
console.log('#Reverse a String');
console.log('hello reverse is ', reverseString("hello"));
console.log('Howdy reverse is ', reverseString("Howdy"));
console.log('Greetings from Earth reverse is ', reverseString("Greetings from Earth"));


// #Factorialize a Number

function factorialize(num) {
	let factorized = 1;

	if (num >= 0) {
		for (let i = 1; i <= num; i++) {
			factorized *= i;
		}
	}

	return factorized;
}

console.log('---------------------------');
console.log('#Factorialize a Number');
console.log('5! = ', factorialize(5));
console.log('10! = ', factorialize(10));
console.log('20! = ', factorialize(20));
console.log('0! = ', factorialize(0));


// #Find the Longest Word in a String

function findLongestWordLength(str) {
	let strArray = str.split(' ');
	let longestWord = '';

	strArray.reduce((acc, curr) => {

		if (acc.length >= curr.length) {
			longestWord = acc;
			return acc = longestWord;
		} else {
			longestWord = curr;
			return curr = longestWord;
		};
	});

	return longestWord.length;
}

console.log('---------------------------');
console.log('The lenght of the longest word is: ', findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log('The lenght of the longest word is: ', findLongestWordLength("May the force be with you"));
console.log('The lenght of the longest word is: ', findLongestWordLength("Google do a barrel roll"));
console.log('The lenght of the longest word is: ', findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log('The lenght of the longest word is: ', findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

// #Return Largest Numbers in Arrays

function largestOfFour(arr) {
	const reducer = (acc, curr) => {
		if (acc > curr) return acc; else return curr;
	}
	let newArray = [];
	arr.forEach(element => newArray.push(element.reduce(reducer)));

	return newArray;
}

console.log('---------------------------');
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

// # Confirm the Ending

function confirmEnding(str, target) {
	// From ES6 this problem could be solved use:
	// return str.endsWith(target);

	let ending = str.substring(str.length, (str.length - target.length));
	if (target == ending) return true; else return false;
}

console.log('---------------------------');
console.log('Bastian ends with n', confirmEnding("Bastian", "n"));
console.log('Congratulation  ends with on', confirmEnding("Congratulation", "on"));
console.log('Connor ends with n', confirmEnding("Connor", "n"));
console.log('Walking on water and developing software from a specification are easy if both are frozen ends with specification', confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log('Open sesame ends with same', confirmEnding("Open sesame", "same"));
console.log('Open sesame ends with sage', confirmEnding("Open sesame", "sage"));
console.log('Open sesame ends with game', confirmEnding("Open sesame", "game"));
console.log('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing ends with mountain', confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log('Abstraction ends with action', confirmEnding("Abstraction", "action"));

// #Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
	let newString = '';

	if (num <= 0) {
		newString = '';
	} else {
		for (let i = 1; i <= num; i++) {
			newString += str;
		}
	}

	return newString;
}

console.log('---------------------------');
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));

// #Truncate a String

