function rotateImage(a) {
	for (let i = 0; i < a.length; i++) {
		//transpose array over center diagonal
		let length = a[0].length - 1;
		for (let j = 0; j < i; j++) {
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

	return a;
}

//without any prior knowledge of array manipulations this was difficult.
//without knowledge of transposing this was difficult
//inplace made this difficult as well
//rotation then depens on number of times run
let img = [ [ 1, 2, 3, 6 ], [ 4, 5, 6, 8 ], [ 7, 8, 9, 7 ], [ 0, 0, 0, 8 ] ];
console.log(rotateImage(img));
console.log(rotateImage(img));
