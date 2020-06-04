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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //level order
    if(!root) return [];
   
    let r = [];
    let q = [[root]];
    while(q.length){
        let level = q.shift();
        let lo = [];
        let loq = [];
    
        for(let i of level){
             
            let v = i !== null ? i.val:null;
            v !== null && lo.push([v])
            v !== null && loq.push(i.left);
            v !== null && loq.push(i.right);
        }
        loq.length > 0 && q.push(loq)
        lo.length > 0 && r.push(lo)
    }
    return r;
    
};