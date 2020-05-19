// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
	let current = l;
	let prev = null;
	while (current) {
		if (current.value === k) {
			if (!prev) {
				l = current.next;
				current = l;
			} else {
				prev.next = current.next;
				current = current.next;
			}
		} else {
			prev = current;
			current = current.next;
		}
	}
	return l;
}

//ticky part here was k at beginning of list
//not sure this will work if every value is k
