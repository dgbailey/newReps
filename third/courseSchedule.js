/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    let seeing = new Set();
    let seen = new Set();
    
    let edgeList = createEdgeList(numCourses,prerequisites);
    let hasCycles = true;
    
    searchCycles(edgeList);
    return hasCycles
    
    function searchCycles(e){
        for(let i = 0; i < e.length; i ++){
            if(!traverse(i)){
            
                hasCycles = false;
            };
        }
        
        function traverse(i){
            if(seeing.has(i)) return false;
            if(seen.has(i)) return true
            seeing.add(i)
            
            for(let d of e[i]){
               if(!traverse(d)){
                   return false
               }
                
            }
            seeing.delete(i);
            seen.add(i);
            return true
            
        }
        
    }
    
    function createEdgeList(n,p){
        let list = Array.from(Array(n)).map(v => []);
   
        for( let i = 0; i < p.length; i ++){
        
            let c = p[i][0];
            let d = p[i][1];
            list[c].push(d);
        }
        return list
    }
    
};