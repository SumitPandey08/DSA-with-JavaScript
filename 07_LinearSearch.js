function linearSearch(array , target){
   for(let i = 0 ; i < array.length ; i++){
      if(array[i] == target){
        return i ;
      }


   }
   return -1 ;

}

console.log(linearSearch([21 , 34  , 56 , 98 , 9, 12] , 12));
console.log(linearSearch([21 , 34  , 56 , 98 , 9, 12] , 34));
console.log(linearSearch([21 , 34  , 56 , 98 , 9, 12] , 91));

// Big-O = O(n) linear time complexity
