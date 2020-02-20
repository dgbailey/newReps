/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //this seems like a good DFS solution
    //concerned about duplicate values here
    //time complexity O(v + 2e)
    
    //iterate through given word
    
    //counter at 0
    //increment on qualified match
    //qualified match current row +1 same col
    //OR row +1 same column
    let counter = 0;
    let previous = [0,0];
    
    for(let i = 0; i < matrix.length; i ++){
        for (let j = 0; j < matrix[0].length;j ++){
            
            let item = board[i][j];
             //win condition
            if(word[counter] === item){
                let prevRow = previous[0];
                let prevCol = previous[1];
               
                if(i === prevRow && j === prevCol){
                    counter++;
                }
                else if(prevRow +1 === i && j === prevCol){
                    counter++;
                }
                else if(prevRow === i && prevCol + 1 === j){
                    counter++;
                }
            }
            
        }
    }
};

//thought DFS first
//thought brute counter method second, counter method fails with false positives (deadends)

//I worried about how to track visited values for dfs (defaulting to the mentality that I couldn't mutate matrix)
//should have thought that mutating was another appropriate solution to tracking visited cells
//this would have given me the confidence to move forward with the solution.