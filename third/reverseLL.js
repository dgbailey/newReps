/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //chain of nodes
    //initial value
    let prev = null;
    //current node
    let current = head;
    //placeholder
    
    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev
};