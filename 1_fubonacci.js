// starting by function

function fubonacci(n){

    array = [ 1, 2 ] ;
    for (i = 2 ; i <= n ; i++)
    {
        array[i] = array[i-1] + array[i-2] ;

    }
    return array ;
}
console.log(fubonacci(4)) // [1 , 2 , 3 , 5 , 8]
console.log(fubonacci(16))
console.log(fubonacci(64))
// Bog-O = O(n) time complexity  linear