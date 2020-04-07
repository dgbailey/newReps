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
			// if (perm) {
			// 	p.push(perm);
			// }
		}

		//first all n combos
		//d
		//do //g
		//dog //'' ~
		//d
		//nae ~
		//naem *
		//nm
	}
}

getPerms();
