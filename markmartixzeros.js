/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //traverse matrix looking for zeroes
    //where am I in the matrix
    let rowLocation = {};
    let colLocation = {};
    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length;++j){
            
            let matrixItem = matrix[i][j];
            if(matrixItem === 0){
                rowLocation[i] = i;
                colLocation[j] = j;
            }
        
    }
    }
    console.log(rowLocation)
    console.log(colLocation)
     for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length;++j){
            
         
            if(rowLocation[i] !== undefined || colLocation[j] !== undefined){
         
                matrix[i][j] = 0;
            }
        
    }
    }
    return matrix
};

//be careful on coercion of 0s into true and false conditions in if() statements
//you struggled here appreciating the hashmap application and reading the directions
//you were close on the idea of two passes