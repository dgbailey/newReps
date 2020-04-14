function minimumAbsoluteDifference(arr) {
	function _generateAbsDiff(a, b) {
		return Math.abs(a - b);
	}
	//think greedy
	//optimal sub problem as you iterate through numbers
	//-59 -36 -13 1 -53 -92 -2 -96 -54 75
	//-96 -92 -59 -54 -53 -36 -13 -2  1  75
	let currentMin = _generateAbsDiff(arr[0], arr[1]);
	arr.sort();
	for (let i = 1; i < arr.length; i++) {
		let nextMin = _generateAbsDiff(arr[i], arr[i + 1]);
		if (nextMin < currentMin) {
			currentMin = nextMin;
		}
	}
	return currentMin;
}

//is this really considered greedy?
//Greed here is more of a technique choice
//we are selecting greedily here by sorting by ascenting

//if we look at consecutive pairs in a single pass we can see we miss out on some potential combinations (this is ultra greedy)
//if we sort the list first we know that the pairs we miss out on will always have a greater absolute difference than the pair we are
//currently evaluating
