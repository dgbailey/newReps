//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function restoreBinaryTree(inorder, preorder) {
	//case empty array
	//case two empty arrays
	if (inorder.length === 0) {
		return null;
	}

	let root = preorder[0];
	let leftLength = inorder.indexOf(root);
	let tree = new Tree(root);
	tree.left = restoreBinaryTree(inorder.slice(0, leftLength), preorder.slice(1, leftLength + 1));
	tree.right = restoreBinaryTree(inorder.slice(leftLength + 1), preorder.slice(leftLength + 1));

	return tree;
	//use vertex

	//Q:how do we know the transition between left and right children
	//in order always ends with leftmost leaf
	//is next value root?
}
//this runs in quadratic time due to case of imbalanced tree, and linear operations within the call
