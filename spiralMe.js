/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    
    //matrix has boundaries
    //establish boundaries
    let output = [];
     if (matrix.length == 0) {
            return output;
        }  
    let rowStart = 0;
    let colEnd = matrix[0].length -1;
    let rowEnd = matrix.length -1;
    let colStart = 0;
   
    //do we need to do a quadratic iteration?
    
    while(colStart <= colEnd && rowStart <= rowEnd){
        
            for(let i = colStart; i <= colEnd; i ++){
                output.push(matrix[rowStart][i]);
            }
            ++rowStart;
          
        
       
            for(let j = rowStart; j <= rowEnd;j++ ){
                output.push(matrix[j][colEnd])
            }
            --colEnd;
            
        
        if(rowStart<= rowEnd){
            for(let k = colEnd; k >= colStart;k--){
                output.push(matrix[rowEnd][k]);
            }
           
        }
          --rowEnd;
   
        if(colStart <= colEnd){
            for(let h = rowEnd;h >= rowStart;h--){
                output.push(matrix[h][colStart]);
            }
            
           
        }
        ++colStart
    }
        
       return output
            
            
    
        
        
        
        
        
        
    
};
//just a ton of moving parts here
/*
    the ending case was the toughest to determine
    eventually rows and columns will converge on the final numbers of the spira
    this means row start and finish and column start and finish indices will always be s <= finish

   

*/