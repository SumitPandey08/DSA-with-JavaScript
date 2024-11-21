function factorial(n){
    result = 1 ;

    for(i = 2 ; i <= n ; i++){
        result = result * i ;
    }
    return result ;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800

// Big-O = O(n) again linear
