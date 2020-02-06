/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
    let sString = '';
    let tString = '';

    
    traverseS(s);
    traverseT(t);
        console.log(sString)
      console.log(tString)
    return subStringSearch(sString,tString);
    //14235
    //142
    
    function subStringSearch(s1,s2){
        let count = 0;
        for(let i = 0; i < s1.length; i++){
            if(s1[i] === s2[count]){
                count++;
                for(let j = i +1; j < s1.length; j++){
                    
                    if(count === s2.length){
                            break;
                    }
                    else if(s1[j] === s2[count]){
                       
                        
                        count++
                    }
                    else{
                        count = 0;
                        break;
                    }
                }
                
            }
            if(count === s2.length){
                return true;
            }
        }
        return false;
        
    }
    function traverseS(node){
        if(!node){
            sString +='n'
            return
        }
         sString += node.val;
        traverseS(node.left);
       
        traverseS(node.right);
        
    }
    
    function traverseT(node){
        if(!node){
            tString +='n'
            return
        }
         tString += node.val;
        traverseT(node.left);
       
        traverseT(node.right);
        
    }
    
    console.log(sString);
    //structure and node values
    //traversal style
        //order and serialize?
        //serialize s look for substring t
    
        //14235
        //142
        //140235
    //on a head node match you could call a traversal of t
};

//passes 175/176 tests
//preorder traversal worked better than in order
//substring search quadratic, no experimentation with KMP