//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function digitTreeSum(t) {
	let sum = 0;
	let rt = '';
	traverse(t, rt);
	return sum;

	function traverse(node, runningTotal) {
		if (!node) {
			return;
		}
		let levelSpecificNumber = runningTotal + node.value;
		traverse(node.left, levelSpecificNumber);
		traverse(node.right, levelSpecificNumber);
		if (!node.left && !node.right) {
			sum = sum + parseInt(levelSpecificNumber);
		}
	}
	//when are we at a root?
	//once we are lets concat our final output up until that point
	//lets push it to an array or total var
}
