// function compress(string) {
// 	//incorrect
// 	//hash solution even necessary
// 	let { length } = string;
// 	let index = {};
// 	let hash = {};
// 	for (let i = 0; i < string.length; i++) {
// 		if (hash[char]) {
// 			hash[char]++;
// 		} else {
// 			hash[char] = 1;
// 		}
// 	}
// 	let compressed = Object.keys(hash).reduce((o, v) => o + (v + hash[v]), '');
// 	return compressed.length > length ? string : compressed;
// }
function compressV2(oldString) {
	//try adding and removing from hash map
	let { length } = oldString;
	let hash = {};
	let newString = '';
	for (let i = 0; i <= oldString.length; i++) {
		let char = oldString[i];

		if (hash[char]) {
			hash[char]++;
		} else {
			let charPrev = oldString[i - 1];
			if (charPrev) {
				let addition = charPrev + hash[charPrev];
				newString += addition;
				delete hash[charPrev];
			}

			hash[char] = 1;
		}
	}

	return newString.length > length ? oldString : newString;
}
console.time('compress');
compressV2('abcdefghijklmnop');
console.timeEnd('compress');
//you didn't read through and understand the desired output thoroughly first

//started with hashing
