/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	//2d matrix
	//dfs for each cell in matrix
	//worst case all 1s
	if (grid.length === 0) {
		return 0;
	}
	let visited = new Set();
	let row = grid.length;
	let col = grid[0].length;
	let islands = 0;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			let cellKey = `${i}${j}`;
			if (grid[i][j] === '1') {
				if (!visited.has(cellKey)) {
					dfs([ i, j ]);

					islands++;
				}
			}
		}
	}
	return islands;

	function dfs(cell) {
		visited.add(`${cell[0]}${cell[1]}`);

		let [ r, c ] = cell;

		let neighbors = [ [ -1, 0 ], [ 1, 0 ], [ 0, 1 ], [ 0, -1 ] ];

		for (let n of neighbors) {
			let newRow = parseInt(r) + n[0];
			let newCol = parseInt(c) + n[1];
			let ck = `${newRow}${newCol}`;

			if (0 <= newRow && newRow < row && (0 <= newCol && newCol < col)) {
				if (grid[newRow][newCol] === '1') {
					if (!visited.has(ck)) {
						//if legal neighbor

						dfs([ newRow, newCol ]);
					}
				}
			}
		}
	}
};
//this solution is off by 3 test cases
//difficult part was that it uses string data
//difficult part was remembering to assess valid moves first
//felt a bit repetitive checking for visited in top level function
//could have had a better counting system
//time complexity O(m*n) * landCells
