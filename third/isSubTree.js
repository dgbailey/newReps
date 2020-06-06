/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
   
    
    //or some kind of serialized matching and substring search?
        //this will involve substring search function
        //in order serialization function
    let t1 = serialize(s);
    let t2 = serialize(t);
    let result = search(t1,t2);
    return result
    
    function serialize(tree){
        let str = '';
        traverse(tree);
        return str
        
        function traverse(tree){
            if(!tree){str+= 'null';return}
             str += tree.val;
            traverse(tree.left);
          
            traverse(tree.right);
            }
            
        }
    //
    //
    function search(s1,s2){
       
        let isSubtree = false;
        let count = 0;
        for(let i = 0; i < s1.length; i ++){
            
            if(s1[i] === s2[count]){
                 if(count === s2.length -1){
                
                        isSubtree = true;
                        
                       
                     } 
                count++;
           
                for(let j = i + 1; j < s1.length; j++){
                     
                    if(s1[j] === s2[count]){
                      
                         if(count === s2.length -1){
                
                         isSubtree = true;
                           
                             break;
                       
                     }   
                       count++
                      
                    }
                   else{
                       count = 0;
                       break;
                   }
                    
                }
               
            }
            
        }
        return isSubtree
    }
    
      
    
};
//this does not pass all tests. Substring search fails for single node trees [12, [2]
//need to redo this example with better example solution