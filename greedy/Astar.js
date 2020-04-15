//n X n sliding tile board
//find blank tile
//

function _determineGoalState(matrix) {
	for (let row of matrix) {
		row.sort();
	}
	return matrix;
}

function _mDistanceLookup(goalStateMatrix) {
	let hash = {};
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			hash[matrix[(i, j)]] = [ i, j ];
		}
	}
}
function _filterBoundaries(swapsArray, ...args) {
	let [ r, c ] = args;
	swapsArray.filter(([ c, r ]) => {
		if (c < colLimit && r < rowLimit && (c >= 0 && r >= 0)) {
			return true;
		} else {
			return false;
		}
	});
}

function _nextBoardState(currentState, goalState) {
	//returns next optimal matrix
	let nullCoords = _findBlankTile(currentState);
	let rowLimit = currentState.length;
	let colLimit = currentState[0].length;
	let filteredSwapArray = _filterBoundaries(_createSwapsArray(nullCoords, currentState), rowLimit, colLimit);
	let newBoardStates = _implementSwaps(filteredSwapArray, currentState, nullCoords);
	return _calcMinHeuristic(newBoardStates, goalState); //find  min g(n) + h (n)
}

function _calcMinHeuristic(newBoardStates, goalState) {
	//assumption here is that every g(n) is constant (1)
	//optimum then depends on underestimate of h(n)

	let heuristicScrores = [];
	let lookupTable = _mDistanceLookup(goalState);
	for (let newBoardState of newBoardStates) {
		let h = _hHeuristic(newBoardState, lookupTable, _manhattan);
		let g = _gHeuristic();
		heuristicScrores.push(h + g);
		return newBoardStates[maxIndex(heuristicScrores)];
	}

	function maxIndex(arr) {
		let min = Infinity;
		let index;
		for (let i = 0; i < arr.length; i++) {
			if (value < min) {
				min = value;
				index = i;
			}
		}
		return index;
	}
}

function _implementSwaps(filteredSwapArray, currentMatrixState, nullCoords) {
	//returns array of new path matrices
	filteredSwapArray.map((fs) => {
		let copyCurrentState = currentMatrixState.map((r) => [ ...r ]);
		let tmp = copyCurrentState[(nullCoords[0], nullCoords[1])];
		copyCurrentState[(nullCoords[0], nullCoords[1])] = copyCurrentState[(fs[0], fs[1])];
		copyCurrentState[(fs[0], fs[1])] = tmp;
		return copyCurrentState;
	});
}

function _createSwapsArray(blankTileCoords, matrix) {
	//swaps will have structure [[newBlankRow,newBlankCol]]
	let dirs = [ [ 1, 0 ], [ -1, 0 ], [ 0, 1 ], [ 0, -1 ] ];
	let row = nullCoords[0];
	let col = nullCoords[1];
	return dirs.map((d) => {
		let swap = [ [ d[0] + row, d[1] + col ] ];
		return swap;
	});
}

function _manhattan(a, b) {
	return Math.abs(a - b);
}

function _hHeuristic(newBoardState, lookupTable, heuristic) {
	//return arr of H scores for each possibility
	let hScores = [];
	for (let i = 0; i < newBoardStates.length; i++) {
		for (let j = 0; j < newBoardStates.length; j++) {
			let boardValue = newBoardState[i][j];
			let [ goalRow, goalCol ] = lookupTable[boardValue];
			let hRow = heuristic(goalRow, i);
			let hCol = heuristic(goalCol, j);
			hScores.push(hRow + hCol);
		}
	}
	return hScores.reduce(sum, (v) => sum + v);
}

function _gHeuristic(currentState = null, nextState = null) {
	//returns one given that any variant of the sliding puzzle can only differ by manhattan of 1
	return 1;
}

function _findBlankTile(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matix[0].length; j++) {
			if (matrix[i][j] === 0) {
				return [ i, j ];
			}
		}
	}
}
