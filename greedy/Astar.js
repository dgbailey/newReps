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

function _nextBoardStates(currentState, goalState) {
	//find null
	//find next moves
	//make moves
	//return matrices
	let nullCoords = _findBlankTile(currentState);
	let rowLimit = currentState.length;
	let colLimit = currentState[0].length;
	let filteredSwapArray = _filterBoundaries(_createSwapsArray(nullCoords, currentState), rowLimit, colLimit);
	//we make our decision here which state to push into queue
}

function _implementSwaps(filteredSwapArray, currentMatrixState, nullCoords) {
	filteredSwapArray.map((fs) => {
		let copyCurrentState = currentMatrixState.map((r) => [ ...r ]);
		let tmp = copyCurrentState[(nullCoords[0], nullCoords[1])];
		copyCurrentState[(nullCoords[0], nullCoords[1])] = copyCurrentState[(fs[0], fs[1])];
		copyCurrentState[(fs[0], fs[1])] = temp;
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

function _chooseNextBestPath() {
	//how?
	//need min heuristic score for each next possible path
}

function _hHeuristic(nextState, goalState) {}
function _gHeuristic(currentState, nextState) {}

function _findBlankTile(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matix[0].length; j++) {
			if (matrix[i][j] === 0) {
				return [ i, j ];
			}
		}
	}
}
