/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    //traversal
    return traverse(root);
  
    function traverse(next,min=-Infinity,max=Infinity){
        if(!next){
            return true
        }
        if(next.val <= min || next.val >= max){
            return false;
        }
        
        return traverse(next.left,min,next.val) && traverse(next.right,next.val,max)
    }
    
};

//lt or equal two condition forgot about there could be dupes in bst?
//challenging part is keeping track of whether values down in the tree violate BST by conflicting with root value
//reviewed