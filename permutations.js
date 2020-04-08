function getPerms() {
	allPermutations('', 'dog');

	function allPermutations(prefix = '', suffix) {
		if (suffix.length === 0) {
			console.log(prefix);
		}

		for (let i = 0; i < suffix.length; i++) {
			let newPrefix = prefix + suffix[i];
			let newSuffix = suffix.slice(0, i) + suffix.slice(i + 1);
			allPermutations(newPrefix, newSuffix);
		}
	}
}

getPerms();
//splitting into prefex and suffix was the tough part here
//also following the recursion on each level was tough
//following the return of recursive calls was initually printing undefined as a base case returned to a previous stack frame
//splitting followed from logic
//ok first all perms starting with prefix d
//then with do
//then with dog
//return
//ok now with dg suffix o
//ok now with dgo suffix ''
//return
//ok now with o suffix 'dg' and so on
