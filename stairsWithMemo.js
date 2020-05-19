function stepPerms(n) {
	let answer = traverse(n);
	return answer;
	function traverse(n, memo = {}) {
		if (memo[n]) {
			return memo[n];
		}
		if (n < 0) {
			return 0;
		}
		if (n === 0) {
			return 1;
		}
		if (n === 1) {
			return 1;
		}
		memo[n] = traverse(n - 3, memo) + traverse(n - 2, memo) + traverse(n - 1, memo);
		return memo[n];
	}
}
