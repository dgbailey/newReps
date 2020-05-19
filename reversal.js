//create and reverse a doubly linked list

class DLL {
	constructor(node) {
		this.head = node;
	}

	add(node, current = this.head) {
		if (!current.next) {
			current.next = node;
			node.prev = this.head;
		} else {
			this.add(node, current.next);
		}
	}

	reverse() {
		let prev = null;
		let current = this.head;

		while (current) {
			let temp = current.next;
			current.next = prev;
			current.previous = temp;
			prev = current;
			current = temp;
		}
		this.head = prev;
	}
}

class Node {
	constructor(val) {
		this.next = null;
		this.prev = null;
		this.value = val;
	}
}

let myHead = new Node(3);
let myDLL = new DLL(myHead);

let values = [ 1, 2, 3, 4, 5 ];
values.forEach((v) => {
	let nv = new Node(v);
	myDLL.add(nv);
});
myDLL.reverse();

let current = myDLL.head;
while (current) {
	console.log(current.value);
	current = current.next;
}

//recursive SLL reversal

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let current = head;
	let prev = null;
	return r(current, prev);

	function r(current, prev) {
		if (current === null) {
			console.log(prev);
			return prev;
		}

		let temp = current.next;
		current.next = prev;
		prev = current;
		current = temp;
		return r(current, prev);
	}
};
