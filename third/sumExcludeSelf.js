/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //hash?
    //lookup reduce?
    let output= [];
    for(let i = 0; i < nums.length;  i ++){
        let p = 1;
        for(let j = 0; j < nums.length; j ++){
            if(j !== i){
                 p = p*nums[j];
            }
           
        }
        output.push(p);
    }
    return output
};
//quadratic time complexity