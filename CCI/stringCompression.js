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
function stringBuilder() {
	this.mutable = [];
	this.add = function(character) {
		this.mutable.push(character);
	};
	this.string = function() {
		return this.mutable.join('');
	};
}
function compressV2(oldString) {
	//try adding and removing from hash map
	let { length } = oldString;
	let hash = {};
	let newString = new stringBuilder();
	for (let i = 0; i <= oldString.length; i++) {
		let char = oldString[i];

		if (hash[char]) {
			hash[char]++;
		} else {
			let charPrev = oldString[i - 1];
			if (charPrev) {
				let addition = charPrev + hash[charPrev];
				newString.add(addition);
				delete hash[charPrev];
			}

			hash[char] = 1;
		}
	}

	return newString.string().length > length ? oldString : newString.string();
}
console.time('compress');
compressV2('accddddeee');
console.timeEnd('compress');
console.log(compressV2('accdddeee'));
//you didn't read through and understand the desired output thoroughly first

//started with hashing

//So i tried to optimize this with a string builder , but apparent JS already does something like this
//the rules are different between Java and javascript apparently.
//Adding a mutable instead of copying only worsened performance.
//recognizing the sequence of n + n
