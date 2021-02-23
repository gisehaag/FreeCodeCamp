// #Sum All Numbers in a Range

function sumAll(arr) {
	let min = (arr[0] < arr[1]) ? arr[0] : arr[1];
	let max = (min == arr[0]) ? arr[1] : arr[0];

	let numBetween = Math.abs(max - min) - 1;
	let sum = min;

	for (let i = 1; i <= numBetween; i++) {
		sum += min + i
	}
	return sum + max;
}


console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

//  #Diff Two Arrays

function diffArray(arr1, arr2) {
	let newArr = [];

	arr1.forEach(element => {
		if (!arr2.includes(element)) {
			newArr.push(element);
		}
	});

	arr2.forEach(element => {
		if (!arr1.includes(element)) {
			newArr.push(element);
		}
	});

	return newArr;
}

console.log('---------------------------');
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

// #Seek and Destroy

function destroyer(arr) {
	let fullArgs = [...arguments];
	let myArguments = [];
	let restArg = [];
	let result = [];

	arr.forEach(element => myArguments.push(element));
	for (let i = 1; i < fullArgs.length; i++) {
		myArguments.push(fullArgs[i]);
	}

	for (let i = (arr.length - 1) + 1; i < myArguments.length; i++) {
		restArg.push(myArguments[i]);
	};

	arr.forEach((element) => {
		if (!restArg.includes(element)) {
			result.push(element);
		}
	});

	return result;
}

console.log('---------------------------');
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

// # Wherefore art thou

function whatIsInAName(collection, source) {
	var arr = [];
	// Only change code below this line

	for (let key in collection) {
		for (let newKey in collection[key]) {
			if (collection[key][newKey] == source[newKey]) {
				arr.push(collection[key]);
			};
		};
	}
	// Only change code above this line
	return arr;
}

console.log('---------------------------');
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }));
