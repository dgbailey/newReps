function sudoku2(grid) {
	let a = runRows();
	let b = runCols();
	let c = runGrids();
	console.log(a, b, c);
	if (a && b && c) {
		return true;
	}
	return false;

	function runRows() {
		for (let row of grid) {
			if (!checkForDupes(row)) {
				return false;
			}
		}
		return true;
	}
	function runGrids() {
		let cycles = 0;
		let row = 0;
		let col = 0;
		let grids = Array.from(Array(9)).map((a) => []);
		while (cycles < 9) {
			if (cycles !== 0) {
				if (col === 6) {
					col = 0;
					row += 3;
				} else {
					col += 3;
				}
			}

			getGrids(col, row, cycles);

			cycles++;
		}

		for (let arr of grids) {
			if (!checkForDupes(arr)) {
				return false;
			}
		}
		return true;

		function getGrids(startj, starti, cycles) {
			for (let j = startj; j < startj + 3; j++) {
				for (let i = starti; i < starti + 3; i++) {
					grids[cycles].push(grid[i][j]);
				}
			}
			console.log(cycles, grids[cycles], startj, starti);
		}
	}
	function runCols() {
		let cols = grabCols();
		for (let i = 0; i < cols.length; i++) {
			if (!checkForDupes(cols[i])) {
				return false;
			}
		}
		return true;

		function grabCols() {
			let arr = Array.from(Array(9)).map((a) => []);
			for (let j = 0; j < grid[0].length; j++) {
				for (let i = 0; i < grid.length; i++) {
					arr[j].push(grid[i][j]);
				}
			}

			return arr;
		}
	}
	function checkForDupes(arr) {
		let hash = {};
		for (let num of arr) {
			if (num === '.') {
				continue;
			}
			if (!hash[num]) {
				hash[num] = true;
			} else {
				return false;
			}
		}
		return true;
	}
}

//this was a frustrating problem
//really the tough part was learning how to turn out 3 X 3 grids into rows
//could have transposed to get columns easier into rows
