/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //what is spiral order
    if(matrix.length === 0){
        return matrix
    }
    let edgeList = {};
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j ++){
                
                    
                    edgeList[matrix[i][j]] = ([[i, j+1],[i +1,j],[i, j -1],[i - 1,j]]);
                  
                  console.log(edgeList)
                }
            }
            

    let origin = Object.keys(edgeList)[0];
    let visited = {};
    visited[matrix[[0][0]]] = true;
    let result = [matrix[0][0]];
    let desiredLength = matrix[0].length * matrix.length;
    
    let current = edgeList[origin];
    while(result.length !== desiredLength){
        for(let n of current){
            let x = parseInt(n[0]);
            let y = parseInt(n[1]);
    
            if(result.length === desiredLength){
                return result;
            }
            else if((y >= 0 && y < matrix[0].length) && (x >= 0 && x < matrix.length)){
           console.log(x,y)
                 if(visited[matrix[x][y]]){
                   
                //pass
                  
                }
                else{
                     result.push(matrix[x][y]);
                  
                    visited[matrix[x][y]] = true;
                    current = edgeList[matrix[x][y]];
                    break;
                }
               
            }
          
            
                
            }
            
        
    }
    console.log(result)
    return result
    
    //how to generate spiral indices
    //[0,0][0,1][0,2][1,2][2,2][2,1][2,0][1,0][1,1]
    //traverse to get the spiral indices
    //then get values based on thos indices
    
    
    //how do I traverse a matrix
    
    
    //moves right to left
    //at end of row 1
        //moves to last element in row 2
        //moves to last element in last row
        //moves backwards
};