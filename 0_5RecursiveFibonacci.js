
function recursiveFibonacci(n){
    if(n<2){
        return n;
    }
     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2) ;

}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(10));



// Big-O = O(2^n) time complexity is too and higher than loop 





// concept for recursiveFibonacci of n it need n-1 and n-2 for them it need their 2 precedence too so mean it is starting from 1 and 0
