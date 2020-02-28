/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //what is rotation of a cell?
    //switch one matrix value with another
    //what is a switch how do we know the destination of an item based on origin
    //rotation around center of matrix?
    
   //for in place i need current number, desired position, desired position number
    
    let m = Array.from(Array(matrix.length)).map(a => []);
    console.log(m)
    let lastCol = matrix[0].length -1;
    let firstRow = 0;
    
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            let value = matrix[i][j];
            //row 0 values to last column
            //increment row decrement column
            m[firstRow][lastCol] = value;
            firstRow++;
        }
        firstRow = 0;
        lastCol --;
    }
    
    return m;
};

//what I didn't see here was the idea of making multiple passes on original matrix. one to mutate or transpose, and one to reverse order of rows
//this would be an inplace solution