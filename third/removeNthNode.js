/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //edge removing first
    //removing last
    let length = getLength(head);
    if(length === n) return head.next;
    let answer = navigateToMinusOne(head,n,length);
    return answer
    
    
    function getLength(head){
        let count = 0;
        let current = head;
        while(current){
            count ++;
            current = current.next;
            
        }
        return count
    }
    function navigateToMinusOne(head,n,l){
        let current = head;
        let counter = l - n -1;
        while(counter > 0){
            counter --;
            current = current.next;
            
        }
        current.next = current.next.next
        return head;
    }
};