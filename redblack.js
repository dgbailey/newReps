function redBlackNode(root = false, value, parent) {
	if (root) {
		this.color = 'b';
		this.parent = null;
	} else {
		this.color = 'r';
		this.parent = parent;
	}
	this.value = value;
	this.left = null;
	this.right = null;
}

redBlackNode.prototype = {
	constructor: redBlackNode.prototype.constructor,
	insert(value) {
		if (value > this.value) {
			if (!this.right) {
				this.right = new redBlackNode(false, value, this);
			} else {
				this.right.insert(value);
			}
		} else {
			if (!this.left) {
				this.left = new redBlackNode(false, value, this);
			} else {
				this.left.insert(value);
			}
		}
	},
	_postInsert(node) {
		//parent value black do nothing
		//remember inserting a child always means that child is a leaf -- no children
		if (node.parent.color !== 'b') {
			let left = node.parent.left;
			let right = node.parent.right;
			let sibling = left === node ? right : left;

			if (!sibling || sibling.color === 'b') {
				//do we have a sibling or sib null
				let g = node.parent.parent;
				let p = node.parent;
				let c = node;
				let childGTParent = c.value > p.value;
				let parentGTGrand = p.value > g.value;
				//order nodes ascending
				if (!parentGTGrand) {
					if (!childGTParent) {
						//rotation case 1
						//parents?
						let temp = p.right;
						p.right = g;
						g.left = temp;
						p.parent = g.parent;
						g.parent = p;
						p.color = 'b';
						c.color = 'r';
						g.color = 'r';
					} else if (childGTParent) {
						//rotation case 2
						//parents?
						c.right = g;
						c.left = p;
						g.left = null;
						c.parent = g.parent;
						g.parent = c;
						p.parent = c;
						c.color = 'b';
						p.color = 'r';
						g.color = 'r';
					}
				} else if (parentGTGrand) {
					if (childGTParent) {
						let temp = p.left;
						p.left = g;
						g.right = temp;
						g.parent.right = p;
						p.parent = g.parent;
						g.parent = p;
						p.color = 'b';
						g.color = 'r';
						c.color = 'r';
					} else {
						c.right = p;
						c.left = g;
						c.parent = g.parent;
						g.parent.right = c;
						g.parent = c;
						p.parent = c;
						c.color = 'b';
						g.color = 'r';
						p.color = 'r';
					}
				}
			} else {
				//recoloring
			}
		}
	}
};

let myTree = new redBlackNode(true, 5);
myTree.insert(6);
myTree.insert(2);
myTree.insert(8);
console.log(myTree);
// for (let prop in myTree) {
// 	console.log(prop, myTree[prop]);
// }
