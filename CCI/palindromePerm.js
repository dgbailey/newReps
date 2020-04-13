//is Permutation
function allPermutations(prefix = '', suffix, collection = []) {
	if (suffix.length === 0) {
		collection.push(prefix);
	}
	for (let i = 0; i < suffix.length; i++) {
		let newPrefix = suffix.slice(i, i + 1);
		let nthPrefix = prefix + newPrefix;
		let newSuffix = suffix.slice(0, i) + suffix.slice(i + 1);
		allPermutations(nthPrefix, newSuffix, collection);
	}
	return collection;
}

//is Palendrome O(n/2)?

function isPalendrome(string) {
	//how does this handle phrases
	let stripped = string;
	console.log(stripped);
	let left = 0;
	let right = stripped.length - 1;
	if (stripped.length === 1) {
		return true;
	}
	while (left < right) {
		let leftChar = stripped[left];
		let rightChar = stripped[right];
		if (leftChar === rightChar) {
			left++;
			right--;
		} else {
			return false;
		}
	}
	return true;
}

//is permutation of a Palindrome?
function isPermPalendrome(string) {
	let s = string.replace(/\s/g, '');
	let outcome = allPermutations('', s).some((perm) => {
		if (isPalendrome(perm)) {
			return true;
		}
	});
	return outcome ? outcome : false;
}
console.log(isPermPalendrome('tact coa'));
//generate all permutations
//check all for palindromes
