function removeVowels(inputString) {
	let stringAsArray = inputString.split("");
	let stringSansVowels = stringAsArray.filter(letter => (letter.toLowerCase()!=="a" && letter.toLowerCase()!=="e" && letter.toLowerCase()!=="i" && letter.toLowerCase()!=="o" && letter.toLowerCase()!=="u"));
	return stringSansVowels.join("");
}

console.log(removeVowels("In pseudocode, write a function that takes a string and returns it with all vowels (not including y) removed"));

function returnGreatest(inputArray) {
	let greatest = inputArray[0];
	for (let i = 0; i<=inputArray.length;i++) {
		if (inputArray[i]>=greatest) {
			greatest = inputArray[i];
		}
	}
	return greatest;
}

console.log(returnGreatest([1,2,3,4,5,6,7,8,9,12,14,16,18,19,32,54,12,12,2,3,2,5,2,6,2346,546,45,6345,63456,3456345,634576,3456]));

function fibonacciHundred(){
	let sequence = [0,1];
	let previous = 0;
	for(let i=1; i<=98; i++) {
		sequence.push(sequence[i] + sequence[i-1]);
	}
	return sequence
}
console.log(fibonacciHundred());