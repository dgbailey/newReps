/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	if (nums.length === 0) {
		return -1;
	}
	if (nums.length === 1) {
		if (nums[0] === target) {
			return 0;
		} else {
			return -1;
		}
	}
	if (nums.length === 2) {
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] === target) {
				return i;
			}
		}
		return -1;
	}

	let low = 0;
	let high = nums.length - 1;
	let mid = Math.floor((high - low) / 2);

	return bs(mid, high, low);

	function bs(mid, high, low) {
		if (nums[mid] === target) {
			return mid;
		}
		if (high - low === 1) {
			return -1;
		}
		if (nums[mid] > target && nums[high] < target) {
			let newHigh = mid;
			let newMid = Math.floor((newHigh + low) / 2);
			return bs(newMid, newHigh, low);
		} else {
			let newLow = mid;
			let newMid = Math.floor((high + newLow) / 2);
			return bs(newMid, high, newLow);
		}
	}
};

//this is a failed attempt.
//BS fundamentals weren't too bad
//the challenging part of this problem was making clean cuts on the decision to go left or right initially
//I wasn't able to see all of the potential violations of my initial contions

//[[4,5,6,7,0,2,3]] search 0

//YOu can say that if your mid is GT target and end LT target you know that in a flipped rotated array you are good
//however an edge case is a non flipped array
//[[1,3,5]]
//your rule breaks down here
//if your mid is greater than your end
//if your target lt start
//search right
//else (mid lt end)
//if target gt mid
//search right
//else search left
