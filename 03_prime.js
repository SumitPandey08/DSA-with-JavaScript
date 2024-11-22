//for checking an specific no.
function isPrime(n){

    if(n<2){
        return false ;
    }
    for(i = 2 ; i <= Math.sqrt(n) ;  i++){
           if(n%i == 0){
            return false ;
           }
      }
    return true ;
  
}

console.log(isPrime(17));
console.log(isPrime(27)) ;

//Big-O = O(n)

