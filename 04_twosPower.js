
function twoPower(n){
    if(n<1){
        return false ;
    }

    while(n > 1){
    if(n % 2 == 1){
        return false ;
    }
        n = n/2;


}

  return true ;
  
}

console.log(twoPower(1)) // true
console.log(twoPower(2)) // true
console.log(twoPower(5)) //false

console.log(twoPower(64)) // true

// Big-O = O(log(n)) (because in each iteration we dividing int by 2)