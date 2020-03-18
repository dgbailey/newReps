function rotateImage(a) {
	for (let i = 0; i < a.length; a++) {
		//transpose array over center diagonal
		for (let j = 0; j < a.length; j++) {
			let temp = a[i][j];
			a[i][j] = a[j][i];
			a[j][i] = temp;
		}
	}

	for (let i = 0; i < a.length; i++) {
		//swaps of transposed array until middle
		for (let j = 0; j < a[0].length / 2; j++) {
			let length = a[0].length - 1;
			let temp = a[i][j];
			a[i][j] = a[i][length - j];
			a[i][length - j] = temp;
		}
	}
}

//without any prior knowledge of array manipulations this was difficult.
//without knowledge of transposing this was difficult
//inplace made this difficult as well
