function redBlackNode(root = false, value) {
	if (root) {
		this.color = 'b';
	} else {
		this.color = 'r';
	}
	this.value = value;
	this.left = null;
	this.right = null;
}

redBlackNode.prototype = {
	constructor: redBlackNode.prototype.constructor,
	insert(value) {
		console.log('inserting', value, this.value);
		if (value > this.value) {
			if (!this.right) {
				this.right = new redBlackNode(false, value);
			} else {
				this.insert(value, this.right);
			}
		} else {
			if (!this.left) {
				this.left = new redBlackNode(false, value);
			} else {
				this.insert(value, this.left);
			}
		}
	}
};

let myTree = new redBlackNode(true, 5);
myTree.insert(6);
console.log(myTree);
// for (let prop in myTree) {
// 	console.log(prop, myTree[prop]);
// }
