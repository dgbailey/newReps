//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
	//traverse down the tree inorder
	let kthSmallest = null;
	traverse(t);
	function traverse(node) {
		if (!node) {
			return;
		}
		traverse(node.left);
		k--;
		if (k === 0) {
			console.log(k);
			kthSmallest = node.value;
		}
		traverse(node.right);
	}
	return kthSmallest;
}

//
