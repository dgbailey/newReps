/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
	let visited = new Set();

	const serializeBoard = (b) => {
		let string = '';
		b.forEach((row) => {
			row.forEach((col) => {
				string += col;
			});
		});
		return string;
	};

	//define goal state
	let goalState = '123450';
	//define num moves
	let numMoves = 0;
	//define 2d to 1d matrix swaps
	if (serializeBoard(board) === goalState) {
		return 0;
	}
	let swaps = [ [ 1, 3 ], [ 0, 2, 4 ], [ 1, 5 ], [ 0, 4 ], [ 3, 5, 1 ], [ 4, 2 ] ];

	let queue = [ [ serializeBoard(board) ] ];
	//level wise travel with counter, or storing paths
	while (queue.length > 0) {
		let paths = queue.shift();
		let boardState = paths[paths.length - 1];

		visited.add(boardState);

		//derive new permutations
		let indexZero = boardState.indexOf(0);
		for (let swap of swaps[indexZero]) {
			let temp = boardState[swap];
			let copy = boardState.split('');
			copy[swap] = 0;
			copy[indexZero] = temp;
			copy = copy.join('');

			if (!visited.has(copy)) {
				if (copy === goalState) {
					return paths.length;
				}

				queue.push([ ...paths, copy ]);
			}
		}
	}

	return -1;
};

//this solution is slower than most accepted. I have a feeling it is the number of queue shifts (and the length of the queue) being shifted
//difficult part of this was
//knowing to serialie the board
//determining that's what we were going to BFS
//board permutations, what they look like at each snapshot,
//making sure to keep a visited set to save time
//solution is dependent on there being a finite number of possibilities that an be reached within a time limit
//thinking in terms of a tree helps think about this time complexity which seems to be 3^n or 4^n
