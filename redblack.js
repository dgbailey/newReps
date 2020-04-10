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
				return this._postInsert(this.right.parent);
			} else {
				return this.right.insert(value);
			}
		} else {
			if (!this.left) {
				this.left = new redBlackNode(false, value, this);
				return this._postInsert(this.left.parent);
			} else {
				return this.left.insert(value);
			}
		}
	},
	_postInsert(node) {
		//parent value black do nothing
		//remember inserting a child always means that child is a leaf -- no children
		if (node.color !== 'b') {
			let left = node.parent.left;
			let right = node.parent.right;
			let sibling = left === node ? right : left;

			if (!sibling || sibling.color === 'b') {
				//do we have a sibling or sib null
				let g = node.parent;
				let p = node;
				let c = node.left ? node.left : node.right;
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
						if (g.parent) {
							p.parent = g.parent;
						}

						g.parent = p;
						p.color = 'b';
						c.color = 'r';
						g.color = 'r';
						return p;
					} else if (childGTParent) {
						//rotation case 2
						//parents?
						c.right = g;
						c.left = p;
						g.left = null;
						if (g.parent) {
							c.parent = g.parent;
						}

						g.parent = c;
						p.parent = c;
						c.color = 'b';
						p.color = 'r';
						g.color = 'r';
						return c;
					}
				} else if (parentGTGrand) {
					if (childGTParent) {
						console.log('!!!', node.value);
						let temp = p.left;
						p.left = g;
						g.right = temp;
						if (g.parent) {
							g.parent.right = p;
							p.parent = g.parent;
						} else {
							p.parent = null;
						}
						p.color = 'b';
						g.color = 'r';
						c.color = 'r';
						return p;
					} else {
						c.right = p;
						c.left = g;
						if (g.parent) {
							c.parent = g.parent;
						}
						g.parent.right = c;
						g.parent = c;
						p.parent = c;
						c.color = 'b';
						g.color = 'r';
						p.color = 'r';
						return c;
					}
				}
			} else if (sibling.color === 'r') {
				//if node is root, we need to keep black
				if (node.parent.parent === null) {
					node.parent.color = 'b';
				} else {
					node.parent.color = 'r';
				}
				node.color = 'b';
				sibling.color = 'b';

				if (node.parent.parent) {
					if (node.parent.parent.color === 'r') {
						//have we created a double red between grandparent and greatgrandparent via recolo
						this._postInsert(node.parent);
					}
				}
				return node;
			}
		}
	}
};

let myTree = new redBlackNode(true, 5);
myTree.insert(6);
myTree.insert(2);
myTree.insert(8);
console.log(myTree.insert(10));

//this appears to be working
//we just have trouble keeping track of the root. The root must always be black.

//the issue was not looking at siblings correctly for Parents.  Was looking at sibs for insertion instead .
//http://pages.cs.wisc.edu/~skrentny/cs367-common/readings/Red-Black-Trees/
//https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
