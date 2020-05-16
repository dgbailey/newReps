async function getD() {
	try {
		let i = await fetch('https://dog.ceo/api/breeds/image/random');
		let j = await i.json();
		console.log(j);
	} catch (err) {
		console.log(err);
	}
}
//await result of d
getD();
//testing
//this is a somewhat concise pattern for fetching data,
//however important to consider exactly where you would dispatch events based on success or errors
