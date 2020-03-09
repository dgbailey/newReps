/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    //no duplicate edges
    //do we have cycle in our directed graph?
    //if not topological sort items
    
    let adj = [...Array(numCourses)].map(c => []);
    for(let i = 0; i < prerequisites.length;i++){
        adj[prerequisites[i][0]].push(prerequisites[i][1])
    }
         
  
    let hasCycles = detectCycles();
     
    if(!hasCycles){
        return []
    }
    
    return topoSort(adj);
    
    //topological sort
    function topoSort(edgeList){
     
        //assumes no cycles
        let seen = new Set();
        let seeing = new Set();
        let ordered = [];
        //for each v in edgelist
        for(let i = 0; i < edgeList.length; i ++){
            if(!seen.has(i)) dfs(i);
        }
        
        return ordered;
        
        function dfs(v){
            // seen.add(v);
            
            for(let e of adj[v]){
                if(seen.has(e)){
                continue;
                }
                else{
                    dfs(e);
                }
                
        
            }
            ordered.push(v);
            seen.add(v);
            
           
         
            
        }
    }
    //detect cycles
    function detectCycles(){
        
        let seeing = new Set();
        let seen = new Set();
        //loop through our edge list
        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)) return false
            
        }
        return true
        function dfs(v){
            if(seen.has(v)){
                return true;
            }
            if(seeing.has(v)){
                return false;
            }
            seeing.add(v);
            for(let e of adj[v]){
                
                if(!dfs(e)){
                    return false
                }
            }
            
            seeing.delete(v);
            seen.add(v);
            return true
        }
    }
};


//Cycle detection + Topological Sort
//difficulties
//creating the right type of edge list (understanding num courses and edge relationship)
//choosing the data structure ahs huge implications for execution and algo
//Trouble with what to return while iterating through edge list for cycle detection
//Trouble with base cases in topo sort, needed three really, if seen return true, if seeing false, RETURN DFS result,
//and return true when node has no children

//time complexity??? topo??
//O(v + e)

//time complexity cycle detection?
//)(v + e)