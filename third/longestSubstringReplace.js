var characterReplacement = function(s, k) {
    const dict = {};
    let start = 0;
    let numRepeatingChar = 0;
    let longestSubstr = 0;
    
    for (let end = 0; end < s.length; end++) {
        // Increment count of letter (expanding the window)
        dict[s[end]] = dict[s[end]] || 0;
        dict[s[end]]++;
        
        // Number of the most frequent letter in the window
        numRepeatingChar = Math.max(numRepeatingChar, dict[s[end]]);
        
        // Window length - number of most frequent letter gives us
        // number of letters that need to be replaced. If that's
        // greater than k, we need to shrink the window
        if ((end - start + 1) - numRepeatingChar > k) {
            dict[s[start]]--;
            start++;
        }
        
        // See if the current window is longer than the current max
        longestSubstr = Math.max(longestSubstr, (end - start + 1));
    }
    return longestSubstr

}
//incorrect my solution below
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0; 
    let hash = {};
    let max = 0;
    let repeatsInWindow = 0;
    
    for(let r = 0; r < s.length ; r ++){
  
        if(hash[s[r]] !== undefined){
            ++hash[s[r]]
        }
        else{
            hash[s[r]] = 0;
        }
        reapeatsInWindow = Math.max(repeatsInWindow,hash[s[r]]);
    
        if((r -l + 1) - repeatsInWindow > k){
            hash[s[l]]--
            l++;
        }
        console.log(r - l + 1, repeatsInWindow,l,r)
        max = Math.max((r - l + 1),repeatsInWindow);
        
        
    }
       return max
    
  
};

  