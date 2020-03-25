//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isSubtree(t1, t2) {
	//so I'm given tree T2
	//is there a vertex in t1 such that all descendants represent the full t2 tree
	//traverse simultaneously, diffing any matches
	let flag = false;
	searchMatch(t1);
	return flag;
	function searchMatch(node) {
		//inorder search for t2 matches
		//then diff matches

		if (!node) {
			return;
		}
		console.log(node.value, t2.value);
		searchMatch(node.left);
		if (node.value === t2.value) {
			console.log('diff match');
			if (diffTrees(node, t2)) {
				console.log('changeflag');
				flag = true;
			}
		}
		searchMatch(node.right);
	}
	function diffTrees(node, treetwo) {
		//base case informs truth

		console.log('node', node, 'tt', treetwo);
		if (treetwo === null && node === null) {
			return true;
		}

		if (node.value === treetwo.value) {
			console.log(node.value, treetwo.value);

			return diffTrees(node.left, treetwo.left) && diffTrees(node.right, treetwo.right);
		}

		return false;
	}
}
///study this answer
var isSubtree = function(s, t) {
	// given a node, returns whether they are the same
	var isSame = function(node1, node2) {
		if (!node1 && !node2) return true;
		if (!node1 || !node2 || node1.val != node2.val) return false;
		return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
	};

	// whether t is a subtree of the given node
	var dfs = function(node) {
		if (!node) return false;
		if (node.val == t.val && isSame(node, t)) {
			return true;
		}
		return dfs(node.left) || dfs(node.right);
	};
	return dfs(s);
};
