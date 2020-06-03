
//max depth binary tree;
var maxDepth = function(root) {
    if(!root) return 0
    
    //traverse the tree in order
    let max = 0;
    traverse(root);
    return max;
    
    function traverse(node,count=0){
        if(!node){
            if(count > max){
                max = count;
            }
            return
        }
        
        traverse(node.left,count + 1);
        traverse(node.right,count + 1);
    }
};