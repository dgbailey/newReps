function luckBalance(k, contests) {
	//find important contests with min
	// I need to win (numImportant - k)
	//sort contests by
	function _getImportant(c) {
		let count = 0;
		for (let item of c) {
			if (item[1] === 1) {
				count++;
			}
		}
		return count;
	}
	contests.sort(([ a, b ], [ c, d ]) => {
		return b - d || a - c;
	});
	console.log(contests);
	let sum = 0;

	let c = _getImportant(contests);
	let w = c - k > 0 ? c - k : 0; //max number I can lose
	for (let i = 0; i < contests.length; i++) {
		if (contests[i][1] === 1) {
			if (w > 0) {
				sum -= contests[i][0];
				w--;
			} else {
				sum += contests[i][0];
			}
		} else {
			if (contests[i][1] === 0) {
				sum += contests[i][0];
			}
		}
		console.log(sum);
	}
	return sum;
}
//a greedy selector https://www.cs.unm.edu/~saia/classes/362-s08/lec/lec9-2x2.pdf
//choosing what is optimal at each step
//Note: Shortsightedness: Always go for seemingly next best thing, optimizing the present
//without regard for the future, and never change past choices.
