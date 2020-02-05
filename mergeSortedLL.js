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
    
    while(current1 && current2){
     
        if(current1.val === current2.val){
            
                newHead.next = {...current1};
                newHead = newHead.next;
                newHead.next = {...current2};
                newHead = newHead.next;
            
           
            current1 = current1.next;
          
            current2 = current2.next;
          
        }    
        
        else if(current1.val > current2.val){
            newHead.next = {...current2};
            newHead = newHead.next;
            current2 = current2.next;
        }
        else if(current1.val < current2.val){
            newHead.next = {...current1};
            newHead = newHead.next;
            current1 = current1.next;
            
        }
    
        
    }
    
    if(current1){
        newHead.next = {...current1};
        
    }
    if(current2){
        newHead.next = {...current2};
    }
    
    return rValue.next
    
};


//was originally mutating objects instead of creating shallow copy, resulting in infinite loop;
//shallow copying allows us to manipulate the newHead.next object property without mutating the original current1 object
//beware that for non primitive values, shallow copying only copies references.  The potential for mutation still exists
