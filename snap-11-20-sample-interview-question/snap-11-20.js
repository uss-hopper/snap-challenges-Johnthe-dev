function countFrequency(array) {
	let frequency = {};
	for(const number of array) {
		if(!frequency[number]) {
			frequency[number] = 1;
		} else {
			frequency[number] = frequency[number] + 1;
		}
	}
	return frequency;
}

const array = [2, 2, 3, 5, 6, 7, 8, 2, 5, 3, 4, 8, 6, 9, 1, 0, 5, 3, 7];

console.log(countFrequency(array));

function fizzBuzzBaz(start, end) {
	if(Array.isArray(start)) {
		let array = [];
		for(const number of start) {
			let output = number;
			if(number % 2 === 0) {
				output = "fizz";
			}
			if(number % 3 === 0) {
				output = "buzz";
			}
			if((number % 3 === 0) && (number % 2 === 0)) {
				output = "baz";
			}
			array.push(output);
		}
		return (array);
	} else {
		let array = [];
		let i = 0;
		for(i = start; i <= end; i++) {
			let output = i;
			if(i % 2 === 0) {
				output = "fizz";
			}
			if(i % 3 === 0) {
				output = "buzz";
			}
			if((i % 3 === 0) && (i % 2 === 0)) {
				output = "baz"
			}
			array.push(output);
		}
		return (array);
	}

}

console.log(fizzBuzzBaz(array));