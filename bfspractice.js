//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function largestValuesInTreeRows(t) {
	//row wise traversal
	//dequeue row values
	//test
	//sort row values
	let outputArr = [];
	let queue = [ [ t ] ];

	while (queue.length > 0) {
		let levelVals = [];
		let children = [];
		let dequeued = queue.shift();

		for (let node of dequeued) {
			if (node) {
				levelVals.push(node.value);

				children.push(node.left);
				children.push(node.right);
			}
		}

		if (children.length > 0) {
			queue.push(children);
			outputArr.push(Math.max(...levelVals));
		}
	}

	return outputArr;
}

//eventually you are going to run into null values.  If you are computing max  you have to not include these values
//eventually you will be adding an empty child array back into the queue for an infinite period
//
