function cartisianProduct(array1 , array2){
    let result =  [] ;
    for(let i=  0 ; i < array1.length; i++){
        for(let j = 0 ; j < array2.length ; j++){
            result.push([array1[i] , array2[j]]) ;
    }
}
return result ;
}

console.log(cartisianProduct([1 , 2  , 3 ,4 ] , [8 , 7 , 9 , 0]));

//Big-O = O(m*n) if length of arr1 and arr2 is m , n respectively

