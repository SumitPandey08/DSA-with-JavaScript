function BubbleSort(array){
    let swapped  ;

    do{
    for(i = 0 ; i < array.length - 1 ; i++){
        swapped = false
        if(array[i]  > array[i+1]){
            temp = array[i+1]
            array[i+1] = array[i]
            array[i] = temp
            swapped = true
        }
        else{
            continue ;
        }
    }}while(swapped)
    return array ;

}

console.log(BubbleSort([8 , 20 , -2 , 4 , -6]));
//Big-O = O(n^2) because there is nested loop which increase time complexity by n^2