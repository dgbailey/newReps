function fibIterative(n){

    //fib is the sum starting with n 0 and n 1

    let p = 0;
    let q = 1;
    let sum;
    let count = 1;

    while(count < n){
        sum = p + q;
        p = q;
        q = sum;
        count++

    }

    
    return sum



}

console.log(fibIterative(8));