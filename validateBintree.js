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

//the issue with validating a binary tree is making sure to check 

//this recursion checks every left node with the previous parent.  The challenge here isn't validitaing individual subtrees
//the challenge is checking to make sure that no value in the right tree is less than root.  And no value in left tree is greater than root
//this is done by passing the parent node value down the tree as either the min or max