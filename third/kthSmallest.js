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

//problems the second time around
//didnt understand that first null value in in order traversal signifies the smallest value in BST