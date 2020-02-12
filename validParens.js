/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    //stack
    //read through string placing bracket on stack
    //each iteration compare top of stack with new value
    //if is match pop stack
    if(s.length === 0) return true
    
    let stack = [s[0]];
    let lookup = {'(':')','{':'}','[':']',')':'(','}':'{',']':'['}
 
    
    for(let i = 1; i < s.length; i++){
        if(stack.length === 0){
            stack.push(s[i])
            
        }
       
        else if(s[i] === lookup[stack[stack.length -1]] ){
           
            stack.pop();
        }
        else{
            stack.push(s[i])
        }
    }
    if(stack.length > 0){
        return false
    }
    
    return true
};