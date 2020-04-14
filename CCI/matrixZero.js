function matrixZero(matrix) {
	let row = {};
	let col = {};
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				row[i] = true;
				col[j] = true;
			}
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (row[i]) {
				matrix[i][j] = 0;
			}
			if (col[j]) {
				matrix[i][j] = 0;
			}
		}
	}
	return matrix;
}

let mm = [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 0, 4, 5 ], [ 1, 2, 3, 4, 0 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ];
console.log(matrixZero(mm));
