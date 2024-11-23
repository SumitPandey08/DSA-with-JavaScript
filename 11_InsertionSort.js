function InsertionSort(array){
    for(let i = 1; i < array.length; i++){
     let numberToInsert = array[i] ;
     let j = i -1 ;
     while(j >= 0 && array[j] > numberToInsert){
        array[j+1] = array[j]
        j-- ;
    }
    array[j+1] = numberToInsert ;
}
return array ;
}

console.log(InsertionSort([-2 , -11 , -34 , 4 , 54, 9 ]));

// Big-O  = O(n^2)  because of nested loop