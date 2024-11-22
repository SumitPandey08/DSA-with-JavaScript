
function BinarySearch(array , target){
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middleIndex = Math.floor((left + right)/2)
       if(target == array[middleIndex]){
        return middleIndex
       }

       if(target > array[middleIndex]){
        left = middleIndex + 1
       }
       else{
        right = middleIndex - 1
       }

}
return -1 ;
}

console.log(BinarySearch([-8 , -2 , 0 , 2 , 5 , 8 , 19] , 8));
console.log(BinarySearch([-8 , -2 , 0 , 2 , 5 , 8 , 19] , 19));
console.log(BinarySearch([-8 , -2 , 0 , 2 , 5 , 8 , 19] , -8));
console.log(BinarySearch([-8 , -2 , 0 , 2 , 5 , 8 , 19] , -10));

// Big-O = O(log(n)) because we r continously dividing no. of n by 2
