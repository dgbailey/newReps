    /**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length ===1) return nums[0]
    //why is pivot important?
    //values after the pivot are ascending and GT pivot
    //values before pivot are LT pivot
    
    //scan values for first value less than next
    //that will be the min with only positive values
    
    
    //what about negative numbers
    //[-3,-2,-1,1,2,4,5,6,7]
    //[-3,-2,-1,1,2
    
    //is the minimum always after the pivot point
    for(let i = 0; i < nums.length; i ++){
        if(nums[i + 1] < nums[i]){
            return nums[i + 1]
        }
    }
    return nums[0]
};

//non binary search
//would be good to practice binary variants here, recursive and non-recursive
//important to consider edge of no rotations, even though not specified in problem