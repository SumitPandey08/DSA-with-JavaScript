function MergeAndSort(array){
    let mergedArray = [];
    for(i = 0 ; i < array.length ; i++){
        for( j = 0 ; j < array[i].length ; j++){
            mergedArray.push(array[i][j]);
        }
    }
   return mergedArray.sort()
}
console.log(MergeAndSort([[1 , 2 , 3] , [2 , 5 , 3 ] , [ 5 , 6 , 7 ]]));
