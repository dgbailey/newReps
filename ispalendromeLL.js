// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
	let tourtoise = l;
	let hare = l;
	while (hare && hare.next) {
		tourtoise = tourtoise.next;
		hare = hare.next.next;
	}
	//reverse starting with tourtoise
	let prev = null;
	let current = tourtoise;
	while (current) {
		let temp = current.next;
		current.next = prev;
		prev = current;
		current = temp;
	}
	//leaves us with prev being the start of our new list
	//leaves us with initial head l for comparison
	//final comparison
	while (l && prev) {
		if (!(l.value === prev.value)) {
			return false;
		}
		l = l.next;
		prev = prev.next;
	}
	return true;
}
