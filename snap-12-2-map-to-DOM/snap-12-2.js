names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', ' Sarah'];

function createListItemHtml(itemName) {
	return `<div id="${itemName}">
					${itemName}
		</div>`;
}

function insertArrayIntoHtml(array) {
	array.map(function(person) {
		let itemHtml = createListItemHtml(person.value);
		let itemListRef = document.getElementById("results");
		itemListRef.insertAdjacentHTML("afterend", itemHtml);
	});
}

function performAction() {
	insertArrayIntoHtml(names);
}