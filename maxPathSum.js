/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    
    //starting at root
    //update max sum
    
    //traverse left
    //compare: new number,max-sum,new + previous
    
    //from each sub tree return the max of (nodeVal,maxLeft + nodeVal,maxRight + nodeVal,allThree)
    
    if(!root){
        return 0;
    }
    
    
    let rootVal = root.val;
    let maxLeft = maxPathSum(root.left);

    let maxRight = maxPathSum(root.right);
    
    
    let subTreeSum = maxLeft + rootVal + maxRight;
 
 
    
    return Math.max(rootVal,subTreeSum,maxLeft,maxRight)
    
    
    
};

//doesn't work with negative numbers    