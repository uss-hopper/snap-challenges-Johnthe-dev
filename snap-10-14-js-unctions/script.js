/**
 * convert a weight from a unit to grams.
 *
 * @param weight the weight or mass to be converted
 * @param unit the unit that will be converted from
 * @returns {string|number} mass in grams or error
 */
/**function convertToGrams(weight, unit) {
	if (isNaN(weight)) {
		return "Please enter a valid number."
	} else if(unit.toLowerCase()==="lbs") {
		return weight * 453.592;
	} else if (unit.toLowerCase()==="oz") {
		return weight * 28.3495;
	} else if (unit.toLowerCase()==="kg") {
		return weight * 1000;
	} else if (unit.toLowerCase()==="g") {
		return weight * 1;
	} else if (unit.toLowerCase()==="mg") {
		return weight * .001;
	} else {
		return "Not a valid unit, try lbs, oz, kg, g, or mg."
	}
}
*/

/**
 * return sum of unique positive factors of the input number
 *
 * @param number positive integer to find positive factors of
 * @returns {string|number} sum of all positive factors or error
 */
/**
function sumPositiveFactors(number) {
	 if (Number.isInteger(number) === true) {
		if (number>0) {
			let counter = 1;
			let factorsAdded = 0;
			while (counter<=number){
				if (number%counter === 0) {
					factorsAdded = factorsAdded + counter;
				}
				counter = counter + 1;
			}
			return factorsAdded;
		} else {
			return "Number needs to be positive.";
		}
	 } else {
	 	return "Number is not a positive integer.";
	 }
}

console.log(convertToGrams(5,"kg"));
function initSumPositiveFactors() {
	document.getElementById("resultsIntegerAdder").innerText = convertToGrams(document.getElementById("weightInput").value);
}*/
//Write an algorithm that runs from 1 to 20. When the number is even, output 'fizz'.
// When the number is divisible by 5, output 'buzz'. If it is neither even nor divisible
// by five, output 'foo'.
function fizzbuzz (number, fizzInterval, buzzInterval) {
	let message = "";

	for(let i=1;i<=number;i++) {
		message = message + i;
		if(i%fizzInterval===0) {
			message = message + " fizz";
		}

		if(i%buzzInterval===0) {
			message = message + " buzz";
		}

		if(i%buzzInterval!==0 && i%fizzInterval!==0) {
			message=message + "foo"
		}

		message = message + '\n';
	}

	return message;
}
console.log(fizzbuzz(20, 3, 5));
//Given two numbers, write an algorithm that outputs the sum of all odd numbers
// between those numbers, inclusive.