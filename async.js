async function getD() {
<<<<<<< HEAD
  try {
    let i = await fetch("https://dog.ceo/api/breeds/image/random");
    let j = await i.json();
    console.log(j);
  } catch (err) {
    console.log(err);
  }
}

getD();

//this is a somewhat concise pattern for fetching data,
//new
=======
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
>>>>>>> d3829b8a11f3c9fa7deca12af314d2e61067af8a
//however important to consider exactly where you would dispatch events based on success or errors
