function maxMin(k, arr) {
	let answer = Infinity;
	//sorting ascending and choosing first k integers
	arr.sort((a, b) => a - b);
	let begin = 0;
	let end = k;
	for (let i = begin; end <= arr.length; ) {
		let firstK = arr.slice(i, end);
		let min = firstK[0];
		let max = firstK[firstK.length - 1];
		if (max - min < answer) {
			answer = max - min;
		}
		i++;
		end++;
	}

	return answer;
}
