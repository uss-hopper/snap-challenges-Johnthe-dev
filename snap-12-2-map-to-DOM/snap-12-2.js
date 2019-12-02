names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', ' Sarah'];
//creates html item with an ID of the input that contains the input as plaintext
function createListItemHtml(itemName) {
	return `<div id="${itemName}">
					${itemName}
		</div>`;
}
//inserts each element in array into it's own html element, only use for unique elements
function insertArrayIntoHtml(array) {
	array.map(function(person) {
		let itemHtml = createListItemHtml(person);
		let itemListRef = document.getElementById("results");
		itemListRef.insertAdjacentHTML("afterend", itemHtml);
	});
}
//for onclick
function performAction() {
	insertArrayIntoHtml(names);
}