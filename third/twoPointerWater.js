/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    p1 = 0; 
    p2 = height.length -1;
    max = -Infinity;
    
    while(p1 < p2){
        if(height[p1] <= height[p2]){
            max = computeMax(p1,p2,max);
            p1++;
        }
        else{
            max = computeMax(p1,p2,max);
            p2 --
     }
        
    }
    return max
    
    
    
    function computeMax(p1,p2,max){
        let x = Math.abs(p1-p2);
        let y = Math.min(height[p1], height[p2]);
        let newMax = x * y;
        return Math.max(max, newMax);
    }
    
    
};