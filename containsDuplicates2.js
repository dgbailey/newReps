var containsNearbyAlmostDuplicate = function(nums, k, t) {
    //k diff between indices
    //t diff between numbers
    
    //order matters
        //rules out sorting
    
    //quadratic seems doable
    for(let i = 0; i < nums.length -1; i ++){
        let v = nums[i];
        for(j = i +1; j < nums.length; j ++){
            if( Math.abs(v - nums[j]) <= t && Math.abs(i -j) <= k){
                return true
            }
        }
        
        
    }
    return false
};

//quadratic solution

