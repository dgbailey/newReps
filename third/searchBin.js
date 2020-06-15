/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //linear time complexity -- simple
    //log time --?
    // is pivot important?
    let left = 0; 
    let right = nums.length -1;
    let mid;
    while(left < right){
        mid = Math.floor(left + right /2);
        console.log(left,right,mid)
        if(target === nums[mid]){
            return mid
        }
        //target greater than mid
        if(target > nums[mid]){
            //could be to the right
            if(target > nums[right]){
                right = mid;
            }
            else{
                left = mid;
            }
        }
        //target less than mid
        else{
            if(target < nums[left]){
                left = mid ;
            }
            else{
                right = mid;
            }
        }
        
    }
    return -1
};

//my solution just didnt work
//there is ususally two decisions , determining the conditions for the dcisions is the tough part here.
//working solution below
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    
    var index = -1,
      head = 0,
      tail = nums.length - 1,
      mid;
    
    while (head <= tail) {
      mid = Math.floor((head + tail) / 2);
      if (nums[mid] === target) {
        index = mid;
        break;
      } else if ((nums[head] <= target && target < nums[mid]) ||
                 (nums[head] > nums[mid] && (nums[head] <= target || target < nums[mid]))) {
        tail = mid - 1;
      } else {
        head = mid + 1;
      }
    }
    
    return index;
  };