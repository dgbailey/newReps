//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
	//we need a sum at each vertex
	//any traversal should do
	//O(n) in order traversal
	if (!t) {
		return false;
	}
	// if((t.right == null && t.left === null)){
	//      if(t.value === s){
	//         return true
	//     }
	//     return false
	// }
	//this commented section could have been a good clue as to what we consider a leaf
	//

	let flag = false;
	traverse(t, 0);
	return flag;
	function traverse(node, sum) {
		if (!node) {
			return;
		}
		let newSum = sum + node.value;
		console.log(newSum);
		//we have to get down to the leaves
		traverse(node.left, newSum);
		traverse(node.right, newSum);
		if (node.left === null && node.right === null) {
			if (newSum === s) {
				flag = true;
			}
		}
	}
}
//root to leaf was tricky,
//I knew the proper traversal order execution
//node to leaf was the difficult part here
//a leaf always has null children
//once this was identified as the crux the condition for evaluating path sum could be placed in a post order position,
//upon returning to a vertex, it could be assessed if that vertex was a leaf.  Only then would sum be assessed.
//there are ususally n/2 leaves in a binary tree
//
