var maxProfit = function(prices) {
    //map array into objects to preserve keys, then sort
    //nlogn
    //n
    if(prices.length < 1){
        return 0
    }
    //iterate through keeping track of current min, current max
    
    let currMin = Infinity;
    let currMax = -Infinity;
    let currMaxIndex = 0;
    let currMinIndex = 0;
    let profit = 0;
    
    for(let i = 0; i < prices.length; i ++){
        if(prices[i] < currMin){
            if(currMinIndex <= i){
                currMinIndex = i;
                currMin = prices[i];
                
            
            }
           
        }
        
        if(prices[i] > currMax){
            currMax = prices[i];
            currMaxIndex = i;
        }
        
        if(currMaxIndex > currMinIndex){
            if(currMax - currMin > profit){
                  profit = currMax - currMin;
            }
          
        }
        
        if(currMinIndex > currMaxIndex){
                currMaxIndex = 0;
                currMax = -Infinity;
        }
        
       
    }
    
    
    return profit
    
};

//finished in time limit. Need to see if all of these conditions are necessary.