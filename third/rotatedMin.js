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


//one fail below. couldnt reason about bin search once range of searchable vals was equal to 3
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //so we know our answer is the first number after pivot in sorted rotated
    //our answer is the first number in sorted
    
    let left = 0;
    let right = nums.length -1;
    let mid = Math.floor(nums.length/2);
    //binary finds pivot index quicker
    while(Math.abs(left - right) >= 1){
       
        let l =  nums[mid -1] === undefined ?Infinity:nums[mid -1];
        let r =  nums[mid + 1] === undefined ?Infinity:nums[mid + 1];
         console.log('L:',left,'R:',right,'M:',mid)
        if(nums[mid] < l && nums[mid] < r){
            return nums[mid]
        }
        else{
            left = mid;
            mid = Math.floor(Math.abs(left + right)/2);
            
        }
    }
    if(nums[0] > nums[1]) return nums[1]
    return nums[0]



//i didn't experiment with this kind of condiiton for running my loop. Solution may have trickled out of operating within this l> r constraint
function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
}
    
};