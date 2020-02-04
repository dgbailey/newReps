/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //read all into an array, use length of array
    //convert n = 2
    //before = length - n -1
    //after = length - n + 1
    //return head
    //space n, time n
    
    //in place ?
    //get length from first cycle
    //beforeCounter = length - n  - 1;
    //iterate to beforeCounter, change next value
    //return head
    //space 1, time (n)
    
    let lengthCounter = 0;
    let beforeCounter;
    let current = head;
    
    while(current){
        lengthCounter ++;
        current = current.next;
    }
    
    beforeCounter = lengthCounter - n - 1;
    current = head;
    
    if(beforeCounter < 0){
        return head.next;
    }
    else{
        while(beforeCounter > 0){
        current = current.next;
        beforeCounter --
        }
    
        current.next = current.next.next;
    
        return head;
        
    }
    
    
    
};