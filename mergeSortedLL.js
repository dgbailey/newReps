/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	//sorted
	//single pass
	//compare values
	//store each new head
	//while list heads are not null
	//compare values
	//if even set new head to link values
	//update current values of each ll to reflect movement
	//if lt add to list and update only applicable head
	//

	let newHead = new ListNode(null);
	let rValue = newHead;
	let current1 = l1;
	let current2 = l2;

	while (current1 && current2) {
		if (current1.val === current2.val) {
			newHead.next = { ...current1 };
			newHead = newHead.next;
			newHead.next = { ...current2 };
			newHead = newHead.next;
			//this is the weirdness
			//we are setting newhead next to current1

			current1 = current1.next;

			current2 = current2.next;
		} else if (current1.val > current2.val) {
			newHead.next = { ...current2 };
			newHead = newHead.next;
			current2 = current2.next;
		} else if (current1.val < current2.val) {
			newHead.next = { ...current1 };
			newHead = newHead.next;
			current1 = current1.next;
		}
	}

	if (current1) {
		newHead.next = { ...current1 };
	}
	if (current2) {
		newHead.next = { ...current2 };
	}

	return rValue.next;
};

//was originally mutating objects instead of creating shallow copy, resulting in infinite loop;
//shallow copying allows us to manipulate the newHead.next object property without mutating the original current1 object
//beware that for non primitive values, shallow copying only copies references.  The potential for mutation still exists

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// } [123] [456]
//
function mergeTwoLinkedLists(l1, l2) {
	var head = new ListNode();
	var curr = head;
	while (l1 && l2) {
		if (l1.value <= l2.value) {
			curr.next = l1;
			l1 = l1.next;
		} else {
			curr.next = l2;
			l2 = l2.next;
		}
		curr = curr.next;
	}
	if (!l1) {
		curr.next = l2;
	}
	if (!l2) {
		curr.next = l1;
	}
	return head.next;
}

///there is some weirdness going on here that I don't understand between two different solutions
//in our first example you are mutating the l1 or l2 objet you set to newHead.next

//SOLVED
//TURNS OUT THE REASSIGNMENT OF L1 ON THE CASE OF LINE 135 BELOW WAS CREATING A SUBTLE CYCLE THAT THROWS EVERYTHING OFF

//breakthrough
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
	//loop through both, first node gets set as new head, increment list that node was taken from

	let newHead = new ListNode(null);
	let r = newHead;

	while (l1 && l2) {
		if (l1.value === l2.value) {
			newHead.next = l1;
			newHead = newHead.next;
			l1 = l1.next;
			newHead.next = l2;
			newHead = newHead.next;

			l2 = l2.next;

			//  newHead.next = l1;
			// newHead = newHead.next; L1 OBJECT

			// newHead.next = l2; L1 => L2
			// newHead = newHead.next; L2

			//  l1 = l1.next; POINTS TO L2 INCORRECTOL HERE
			// l2 = l2.next; POINTS TO APPROPRIATE OBJECT
			//this WONT WORK
		} else if (l1.value < l2.value) {
			newHead.next = l1;
			newHead = newHead.next;

			l1 = l1.next;
		} else if (l1.value > l2.value) {
			newHead.next = l2;
			newHead = newHead.next;
			l2 = l2.next;
		}
	}

	if (l1 !== null) {
		newHead.next = l1;
	}
	if (l2 !== null) {
		newHead.next = l2;
	}

	return r.next;
}
