//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
	//level based search is too involved
	if (!t) {
		return true;
	}
	if (!t.left || !t.right) {
		return false;
	}
	return compare(t.left, t.right);

	function compare(l, r) {
		if (l === null && r === null) {
			return true;
		} else if (!r || !l || l.value !== r.value) {
			return false;
		}

		return compare(l.left, r.right) && compare(l.right, r.left);
	}
}

//t === null can be symmetruc
//level based palindromic might work but much more involved
//could not visualize the recursive complexity being accurate at the depth required
//if both our nodes are null we are symmetric (base case)
//otherwise if either is null , assymmetry, or if the values do not match
