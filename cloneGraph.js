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
    if(node.neighbors.length === 0){
        return new Node(1)
    }
  
    let neighborListing = {}//keep copy of existing nodes
   
    let queue = [node];
    
    while(queue.length > 0){
       
        let dequeued = queue.shift();
        let copy = neighborListing[dequeued.val] ? neighborListing[dequeued.val]:new Node(dequeued.val);
        
        
        for(let n of dequeued.neighbors ){
            let neighborExists = neighborListing[n.val];
            if(neighborExists){
                copy.neighbors.push(neighborListing[n.val]);
               
            }
            else{
                let nCopy =  new Node(n.val);
                neighborListing[n.val] = nCopy;
                copy.neighbors.push(nCopy);
                queue.push(n);
            }
          
        }
    }
    
    return neighborListing['1'] 
    
    
   
};

//so what was important here is we had unique values for indices. This way repeated nodes could be tracked in memory.
//Unique indices are important for graphs.  Especially for hash tables. O(v + 2e) for the undirected graph.

//what hung you up? just tracking and making sure we were using the same objects for nodes we had already visited.
//this was important for our dequeued nodes to make sure we were using the right copy object, and while iterating neighbors.
//no visited array was necessary.