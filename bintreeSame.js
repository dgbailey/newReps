/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    function traverse(n1,n2){
       
        if((!n1 && n2) || (n1 && !n2)){
            return false
        }
        
        else{
            
            if(n1 === null && n2 === null){
                return true;
            }
            else{
               
                 if(n1.val !== n2.val){
                return false
        
            }
            }
               
            
        }
        
       
        
        return traverse(n1.left,n2.left) && traverse(n1.right,n2.right);
        
        
        
        
    }
    
    return traverse(p,q);
   
    
    //while navigating two trees simultaneously
    //if you are give null and non null params, structures are not the same
    //if you are given two non null params, values need to be the same
    
    //structure
    //how does the function know structure
    //each arg needs to be non null
    
    //value
    
};

//issue here with logical xor base case for encountering two null values
//issue understanding how to return an accurate answer from the recursive check since you can't just break
//when a false condition is encountered, it must be passed upward