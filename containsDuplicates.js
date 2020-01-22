var containsDuplicate = function(nums) {
    //hash map
    
    let hash = {};
    for(let i = 0; i < nums.length; i ++){
        if(hash[nums[i]] !== undefined){
            return true
        }
        else if(i === nums.lenth -1){
            return false;
        }
        else{
            hash[nums[i]] = i;
        }
        
    }
    return false
    
    //sorted 
};

//linear space, saves 3 ms on the early exit condition

var containsDuplicate = function(nums) {
    //hash map
    
    nums.sort((a,b) => a -b);
    for(let i = 0; i < nums.length -1; i++){
        if(nums[i] === nums[i +1]){
            return true
        }
    }
    
    return false;
    
    //sorted 
};

//contrast that to a superlinear (nlogn) with constant space