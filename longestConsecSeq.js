/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	if (nums.length === 0) {
		return 0;
	}

	//standard bfs O(v + 2E)
	//however completely connectd graph
	//https://stackoverflow.com/questions/21130650/breadth-first-search-algorithm-graph-represented-by-the-adjacency-list-has-a-q
	//now, if it's a completely connected graph, i.e. each pair of vertices is connected by an edge, then the number of edges grows quadratic with the number of vertices:
	//doest really matter if we include self in edgelist
	//assuming duplicates do not count as consec nums in array
	const adj = {};
	const visited = new Set();

	for (let n of nums) {
		adj[n] = nums;
	}

	let max = -Infinity;
	let count = 0;

	for (let k of Object.keys(adj)) {
		count = 0; //reset count each new vertex
		if (!visited.has(k)) {
			count++;
			dfs(parseInt(k));
		}
	}

	return max;

	function dfs(vertex) {
		visited.add(vertex);
		let neighbors = adj[vertex];
		for (let n of neighbors) {
			if (Math.abs(vertex - n) === 1) {
				if (!visited.has(n)) {
					count++;
					dfs(n);
				}
			}
		}
		//evaluate count vs max once full dfs complete
		if (count > max) {
			max = count;
		}
	}

	//I attempted to solve this in linear time with DFS
	//array was translated into adj list with each vertex having itsself and neighbors in adj array
	//Each vertex would be visited at least once
	//each vertiex would be connected to every other vertice in the graph
	//I think my issue is that I am creating a completely connected graph.  My edges are growing quadratic to my vertices.
	//this means that
};
