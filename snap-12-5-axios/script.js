
const getBreeds = async () => {
	try {
		return await axios.get('https://dog.ceo/api/breeds/list/all')
	} catch (error) {
		console.error(error)
	}
};

	const listBreeds = async () => {
		const breeds = await getBreeds();

		if (breeds.data.message) {
			let listVertically = `${Object.keys(breeds.data.message)}`.toString();
			listVertically = listVertically.split(",").join(", ");

			//document.getElementById("target").innerText = (`${Object.keys(breeds.data.message)}`);
			document.getElementById("target").innerText = listVertically;
			console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
		}
	};

function onPageLoad() {
	listBreeds()
}
