/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 /*

 Some really interesting takeaways from this problem

 1) first is the time complexity,
 O(m*n)*4^s
 traversing a matrix at worst will be quadratic
 a dfs on matching characters will be called at worse 4 ^ s times, four options at each matrix cell

 2) the second is the recursive solution to this problem

    having a global visited hash was not a great consideration
    it excluded too many values from future searches

    each recursive call has access to the lexical scope in which the recursive function was defined (not to the previous call stack)
    to approach the problem without a global visited hash, each recursive call frame must have its own history (count and visited)

    the history must be a copy, the history must start 'fresh' upon return to origin from a failed recursive neighbor search
    so that other traversals from same origin are allowed to traverse freely  

3) Boundaries are a given in matrix traversal, establish them as a condition for evaluating neighbors




 */
var exist = function(board, word) {
    
    
    let exists = false;
    
  
   
    
    for(let i = 0;i < board.length; i ++){
        for(let j = 0; j < board[0].length; j++){
                //restart count between columns
               
               let count = 0;
                
                if(board[i][j] === word[count]){
                    
                    let visited = {[`${i}${j}`]:true};
                    traverseValidNeighbors(count +1,i,j,visited);
                   }
                 
            
           
        }
    }
    
    return exists
    
    function traverseValidNeighbors(count,row,col,visited){
        
        
          
       let localVisited = {...visited};
        let localCount = count;
        let neighbors = [[row +1,col],[row,col+1],[row-1,col],[row,col-1]];
        if(localCount === word.length){
                exists = true;
                return
            }
        for (let i = 0; i < neighbors.length; i ++){
            let [row,col] = neighbors[i];
            
            if(row < 0 || row > board.length -1 || col < 0 || col > board[0].length -1 ){
              continue;
               }
            
            if(exists){
                return
            }
            if(localCount === word.length){
                exists = true;
                return
            }
          
            
          
            let k = `${row}${col}`;
            
            if(localVisited[k]){
               continue;
            }
            if(localVisited[k] === undefined && board[row][col] === word[localCount]){
            
                let merge = {};
                merge[k] = true;
                traverseValidNeighbors(localCount +1,row,col,{...localVisited,...merge});
            
            }
            // else{
            //      visited[k] = true;
            // }
        }
  
     
        
    }
};