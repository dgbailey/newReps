/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //identifying circular deps
    //keep history of direct deps
    
    if(prerequisites.length === 0){
        return true
    }
   
    //need a better way to access deps?
    //dfs of dependencies?
    
   let flag = true;
    
    for(let p of prerequisites){
        let directDepHistory = {};
        let current = p;
        let courseId = current[0];
        let courseDep = current[1];
        
        directDepHistory[courseId] = true;
        dfs(courseDep,directDepHistory)
    }

    
    return flag
    
    //search for dependency
    function dfs(courseDep,directDepHistory){
        
        for(let c of prerequisites){
            if(c[0] === courseDep){
                if(directDepHistory[c[1]]){
                    flag = false;
                    return
                }
                else{
                    directDepHistory[c[0]] = true;
                    dfs(c[1],directDepHistory);
                }
            }
        }
    }
 
    
    
    
};

//exceeded time limits due to how I am using the given datascructure
//I believe by refactoring from edgelist to adjacency list I can reduce to linear time;
//below actually finished but barely.  Data structure did knock off time.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //identifying circular deps
    //keep history of direct deps
    
    if(prerequisites.length === 0){
        return true
    }
    
    let adjList = {};
    for(let i = 0;i < prerequisites.length; i ++){
        adjList[prerequisites[i][0]] = prerequisites[i];
    }
   
    
    //need a better way to access deps?
    //dfs of dependencies?
    
   let flag = true;
    
    for(let p of prerequisites){
        let directDepHistory = {};
        let current = p;
        let courseId = current[0];
        let courseDep = current[1];
        
        directDepHistory[courseId] = true;
        dfs(courseDep,directDepHistory)
    }

    
    return flag
    
    //search for dependency
    function dfs(courseDep,directDepHistory){
        let course = adjList[courseDep];
       if(course){
            if(course[0] === courseDep){
                if(directDepHistory[course[1]]){
                    flag = false;
                    return
                }
                else{
                    directDepHistory[course[0]] = true;
                    dfs(course[1],directDepHistory);
                }
            }
        }
    }
 
    
    
    
};


//Topological Sort but not sure how to leverage this
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
   
    //topological sorting
    
    let stack = [];
    let visited = new Set();
    
    let adj = {};
    console.log(adj)
    //make adjacency list
    for(let i = 0; i < prerequisites.length; i ++){
       adj[prerequisites[i][0]] = [String(prerequisites[i][1])];
    }
    console.log(adj)
    
    let visitedRemaining = getUnvisited();
    
    while(visitedRemaining !== false){
        dfs(visitedRemaining);
        
        //on dfs complete search for other nodes in directed graph
        visitedRemaining = getUnvisited();
        
    }
       console.log('stack',stack)
    return stack.length > numCourses ? true:false
    
    //get starting node not in visited
    function getUnvisited(){
        for(let key of Object.keys(adj)){
            if(!visited.has(key)){
                  return key
            }
        }
        return false
    }
    
    function dfs(start){
        if(!visited.has(start)){
             visited.add(start)
            if(adj[start]){
                 for(let neighbor of adj[start]){ 
                    dfs(neighbor); 
                }
            }
        }
        else{
            return
        }
     
       
        //add start to visited once neighbors exhaused
        stack.push(start);
       
    }
    
};

///the trick here is also to identify that what we want is an acyclic directed graph
///if we can detect a cycle in the graph we can return false
//a bit verbose but had initial trouble with the condition [0,1] 2

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length === 0){
        return true;
    }
    let adj = {}
    let visited = new Set();
    let visiting = {};
    
    //create adj list
      for(let p of prerequisites){
          if(adj[p[0]]){
              adj[p[0]].push(p[1]);
          }
          else{
               adj[p[0]] = [String(p[1])]
          }
       
    }
    console.log(adj)
    let result;
    let unvisited = chooseUnvisited();
    while(unvisited !== false){
        result = checkForCycles(unvisited);
        if(!result){
            break;
        }
        unvisited = chooseUnvisited();
    }
    
    return result
    
    //we want courses to be a direct acyclic graph
    //we need to check for cycles in our graph
    function checkForCycles(start){
        if(!adj[start]){
            return true
        }
        if(visiting[start]){
            return false
        }
        if(visited.has(start)) {
            return true
        }
        visiting[start] = true;
        for(let c of adj[start]){
           
            
            let cycle = checkForCycles(c);
            if(cycle){
                continue;
            }
            else{
                return cycle
            }
            
        }
        delete visiting[start];
        visited.add(start);
        return true
        //explore children until we find cycle
        //or no more children
    }
    
    function chooseUnvisited(){
        for(let k of Object.keys(adj)){
            if(!visited.has(k)){
            return k
        }
           
        }
         return false
    }
    
};