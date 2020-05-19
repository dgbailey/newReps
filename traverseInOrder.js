//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function traverseTree(t) {
	let levels = [];
	let queue = [ [ t ] ];
	while (queue.length > 0) {
		let level = queue.shift();
		for (let v of level) {
			let newLevels = [];
			if (!v) {
				continue;
			} else {
				levels.push(v.value);
				let left = v.left;
				let right = v.right;
				newLevels.push(left);
				newLevels.push(right);
				queue.push(newLevels);
			}
		}
	}

	return levels;
}
