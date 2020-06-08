/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //canonical method t and h
    if(!head){
        return false
    }
    if(!head.next){
        return false
    }
    let t = head;
    let h = head;
    
    while(t && h && (t.next && h.next)){
        t = t.next;
        h = h.next.next;
        if(t === h){
            return true
        }
      
        // 1 2 3 1
        // 1 2 3 1
        
    }
    return false
};