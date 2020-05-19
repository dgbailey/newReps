function reverse(head) {
	let current = head;
	let prev = null;
	while (current) {
		let temp = current.next;
		current.next = prev;
		current.prev = temp;
		prev = current;
		current = temp;
	}

	return prev;
}
