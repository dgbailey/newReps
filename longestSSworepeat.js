/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    
    //traverse the string
    
    //multiple things to mind
        //a is the longest substring at s[0]
        //'a' contains b?
        //'ab' contains c?
        //'abc' contians a? yes longest abc, current a
        //current > longest?
    if(s.length === 0){
        return 0
    }
    let counter = 0;
    let index = 1;
    let longest = s[0];
    let current = s[0];
    while(counter < s.length && index < s.length){
        if(current.includes([s[index]])){
            if(current.length > longest.length){
                longest = current;
            }
            
            counter++;
            current = s[counter];
            index = counter+1;
        }
        else{
            current+= s[index];
             if(current.length > longest.length) longest = current;
            index++
        }
        
    }
    
    return longest.length
};

//this is really really  slow.  it is quadratic as most naive substring searches tend to be. My primary issues are identifying all
//of the relevant subcases that must be processed in a string once a repeat has been found.  Permutations  so to speak.


//Here a different approach allows you to reuse a hashmap in order to avoid resetting your index values
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let max = 0;
    let i = 0;
    let j = 0;
    while(j < s.length){
        if(map[s[j]]){
            map[s[i]] = null;
            i ++;
        }
        else{
            map[s[j]] = true;
            max = Math.max(max, j - i + 1);
            j ++;
        }
    }
    return max;
};