function convertToGrams(weight, unit) {
	if(unit.toLowerCase()==="lbs") {
		return weight * 453.592
	} else if (unit.toLowerCase()==="oz") {
		return weight * 28.3495
	} else if (unit.toLowerCase()==="kg") {
		return weight * 1000
	} else if (unit.toLowerCase()==="g") {
		return weight * 1
	} else if (unit.toLowerCase()==="mg") {
		return weight * .001
	} else {
		return "Not a valid unit, try lbs, oz, kg, g, or mg."
	}
}

function sumPositiveFactors(number) {
	 if (number.isInteger() === true) {
		if (number>0) {
			let counter = 1;
			let factors = 0;
			while (counter<number){
				if (number%counter==0) {

				}
			}
		} else {
			return "Number needs to be positive."
		}
	 } else {
	 	return "Number is not a positive integer."
	 }
}