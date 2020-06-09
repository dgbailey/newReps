/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
      for(let i = 0; i < nums.length; i ++){
         
          if(hash[target - nums[i]] !== undefined){
              
              return [i,hash[target - nums[i]]]
          }
          else{
              hash[nums[i]] = i;
          }
      }
      console.log(hash)
      
  };