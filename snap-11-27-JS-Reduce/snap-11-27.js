// 1. Sum this array using JavaScript reduce.
//
// 	[1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368,
// 	75025, 121393, 196418, 317811]
//
// 2. Turn this array into a string using JavaScript reduce.
//
// 	["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor", "core",
// 	"primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is", "futile.",
// 	"Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when", "proceeding.",
// 	"These", "appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow", "them",
// 	"to", "work", "collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation",
// 	"to", "upper", "frequency", "band."]

let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
let words = ["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor", "core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is", "futile.", "Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when", "proceeding.", "These", "appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work", "collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper", "frequency", "band."];
//adds two numbers together
function sum (num1, num2) {
	return num1+num2;
}

let total = numbers.reduce(sum,0);
console.log(total);

//takes two strings and binds them together with a space between
function concatenateStrings(str1, str2) {
	return str1 + " " + str2;
}

let string = words.reduce(concatenateStrings, "");
console.log(string);
