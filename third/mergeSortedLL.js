/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
   
    if(!l1 && ! l2){
        return null
    }
    !l1  &&  l2;
     !l2  &&  l1;
    //sorting techniques
    //merge sort?
    //concat lists
    //write merge sort
    
    
    //or
    //look at each node and compare values
    //add node to array
    //increment to next node
    //join all at the end
    let nodeArray = [];
    let curr1 = l1;
    let curr2 = l2;
    while(curr1 && curr2){
      
        if(curr1.val > curr2.val){
            nodeArray.push(curr2);
            curr2 = curr2.next;
        }
        else if(curr1.val < curr2.val){
            nodeArray.push(curr1);
            curr1 = curr1.next;
        }
        else{
             nodeArray.push(curr1);
             nodeArray.push(curr2);
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
    }
    curr1 && nodeArray.push(curr1);
    curr2 && nodeArray.push(curr2);
    
    return linkNodes(nodeArray);
    
    function linkNodes(arr){
        let head = arr[0]
        for(let i = 0; i < arr.length; i ++){
            if(arr[i + 1]){
                arr[i].next = arr[i+1]
            }
        }
        return head
    }
    
    
    //or
    //look at each node and compare values
    //smaller values are added to new chain
};

//poor speed profile