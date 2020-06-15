    /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = {}
    //add to hash as we iterate string:index
    //if undefined
    //add to hash, increase length
    //if not undefined
    //clear hash
    //clear counter
    //add to hash
    //proceed
    
    //edge
    //where do we reset index
    //+ 1 
    let l = 0;
    let r = 0;
    let count = 0;
    let max = 0;
    
    while(r < s.length){
         if(hash[s[r]] !== undefined){
        //reset
       r = l + 1;
        l++;
        hash = {};
        count = 0;
       
    }
    else if(hash[s[r]] === undefined){
        hash[s[r]] = r;
        r++;
        count ++;
    }
       
    max = Math.max(count,max);
        
    }
   return max
    
};

//super long runtime