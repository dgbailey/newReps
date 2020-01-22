var twoSum = function(nums, target) {
    
    let hash = {};
    for(let val = 0;val < nums.length; val++){
        
        if(hash[nums[val]] !== undefined){
           
            return [hash[nums[val]],val]
        }
        
        hash[target - nums[val]] = val;
        
        
    }
    
        
};

//first solution attempted was two pointer. while valid this involved sorting the array which altered 
//index position.  Hash map was next solution.  Using undefined as a while parameter does not work.