var maxPathSum = function(root) {
   
    //max sub paths of children
    //negative numbers
    //
    let max = -Infinity;
    function recur(root){
         if(!root){
        return 0
    }
    //not ignoring negatives?
    let left = Math.max(0,recur(root.left));
    let right = Math.max(0,recur(root.right));
    max = Math.max(max,root.val + left + right);
    return Math.max(left,right) + root.val;
    }
   recur(root);
    return max
};