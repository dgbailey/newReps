
function maxProduct(nums) {
    let res = -Number.MAX_VALUE;
    let min = 1;
    let max = 1;
    for (let num of nums) {
      [min, max] = [
        Math.min(num, min * num, max * num),
        Math.max(num, min * num, max * num),
      ];
        console.log(min, max)
      res = Math.max(res, max);
    }
    return res;
  }

  //for product, as opposed to sum, we need to keep track of the smallest negative product  we accumulate
  //this notation also keeps us from polluting our computations by calculating max and min with same numbers, by calculating min first it can alter our ultimate solution
  //below we actually do not get the correct answers.


function maxProduct(nums) {
    let res = -Number.MAX_VALUE;
    let min = 1;
    let max = 1;
    for (let num of nums) {
     
       min = Math.min(num, min * num, max * num),
        max = Math.max(num, min * num, max * num),
  
        console.log(min, max)
      res = Math.max(res, max);
    }
    return res;
  }