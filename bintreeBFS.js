/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    //breadth first traversal of bt
    
    let returnArr = [];
    traverse(root);
    
    return returnArr
    
    
    function traverse(node){
        //levels are defined by the  children of a parent node
        //levels increase 2^n in length
        let queue = [[node]];
        
        while(queue.length > 0){
            
            let peek = queue.pop();
            let layer = [];
            let values = [];
            peek.forEach( i => {
                
                if(i === null){
                   
                }
                else{
                    layer.push(i.left);
                    layer.push(i.right);
                    values.push(i.val);
                }
                
            })
            layer.length > 0 && queue.push(layer);
  
            values.length > 0 && returnArr.push(values);
            
        }
    
}};