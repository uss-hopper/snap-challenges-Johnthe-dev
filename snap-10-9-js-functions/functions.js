/**window.onload = function() {
	initMultiplierAndConcatenate();
};

function initMultiplierAndConcatenate() {
	let form = document.getElementById("multiplyForm");
	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}

	addItemToShoppingList();
	formRef.reset();

	return false;
}

function initListeners() {
	let int1 = document.getElementById("int1").value;
	let int2 = document.getElementById("int2").value;
	let str1 = document.getElementById("str1").value;
	let str2 = document.getElementById("str2").value;
	let inputElements = document.getElementsByClassName("input");
	let resultMultiply = multiplyTwoNumbers(int1,int2);
	let resultConcatenate = concatenateTwoStrings(str1,str2);
}
 **/
function multiplyTwoNumbers(int1, int2) {
	//assign initial condition
	 let num1 = 0;
	let num2 = 0;
	//insert inputs to variables
	num1 = int1;
	num2 = int2;
	//multiply and return
	return num1 * num2;
}
function concatenateTwoStrings(str1, str2) {
	let string1 = "";
	let string2 = "";
	string1 = str1;
	string2 = str2;
	return string1+string2;
}

console.log(concatenateTwoStrings("bees ", "bears"));
console.log(multiplyTwoNumbers(4,6));
