function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;
  
    for (var i = 0; i < A.length; i++) {
      prev = Math.max(prev + A[i], A[i]);
      max = Math.max(max, prev);
        console.log(prev,max)
    }
    return max;
  }
  //setting prev & max on each iteration does eliminate options from the decision space
  //initiall we have -2 
  //next we need to choose between -2,1, or the product -2
  //next we have -2, 1, -3, -2 + -1, -2+1+-3
  //with these comparisons
  //we are always optimizing for the max available sum or value
  //and max value