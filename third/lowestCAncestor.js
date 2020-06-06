/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right,p,q);
    }
   else if(p.val < root.val && q.val < root.val){
       return lowestCommonAncestor(root.left,p,q);
   }
    else{
        return root
    }
  
  
  
  //you are looking for the root that sits between the given nodes
  //this could include one of the nodes given. If fits the conditionals above
  
   
      
    
    
    
};