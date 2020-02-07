/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

   
   
    return traverse(root,-Infinity,Infinity)
    
    function traverse(node,min,max){
        
        if(node === null){
            return true
        }
        
        if(node.val <= min || node.val >=max){
            console.log('hmm',node.val,min,max)
            return false;
        }
        
      
        
        return traverse(node.left, min,node.val) && traverse(node.right,node.val,max);
        
        
        
 
    }
};