function fibMemo(num, memo = {}) {
	if (num === 0) {
		return 0;
	}
	if (num < 1) {
		return 1;
	}

	if (memo[num]) {
		return memo[num];
	}

	memo[num] = fibMemo(num - 2, memo) + fibMemo(num - 1, memo);
	return memo[num];
}

console.log(fibMemo(6));
0112358;
