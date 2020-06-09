/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node){
        return node
    }
    let visited = new Set();
    let clone = {};
    cloneg(node);
    return clone[Object.keys(clone)[0]]
    
    function cloneg(node){
       
       if(!visited.has(node.val)){
           visited.add(node.val);
           clone[node.val] = new Node(node.val)
       }
        else{
            return
        }
        
        for(let n of node.neighbors){
            cloneg(n);
            if(visited.has(n.val)){
                clone[node.val].neighbors.push(clone[n.val]);
            }
        }
    }
    
};