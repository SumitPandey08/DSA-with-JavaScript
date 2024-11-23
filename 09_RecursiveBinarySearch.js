function recursiveBinarySearch(array , target){
    return search(array , target, 0 , array.length - 1) ;
}

function search(array , target , left , right){
    let middleIndex = Math.floor((left + right) / 2) ;
    if(left > right ){
        return  -1 ;
    }
    

    if(target == array[middleIndex]){
        return middleIndex ;
    }

    if(target > array[middleIndex]){
        return search(array , target , middleIndex + 1 , right) ;
    }
    else{
        return search(array , target , left , middleIndex - 1) ;
    }
}


console.log(recursiveBinarySearch([-10 , - 4 ,-2 , 0 , 2 , 3 , 6 , 11] , 11))
console.log(recursiveBinarySearch([-10 , - 4 ,-2 , 0 , 2 , 3 , 6 , 11] , -10))
console.log(recursiveBinarySearch([-10 , - 4 ,-2 , 0 , 2 , 3 , 6 , 11] , 17))
//  Big-O = O(log(n))  as n is getting half in each call 