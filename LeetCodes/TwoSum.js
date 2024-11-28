function  twosum(arr , target){
    let array ;
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
         if(arr[i] + arr[j] == target){
            array = [arr[i] , arr[j]] ;
         }

        }

    }
    return array ;
}

console.log(twosum([2 , 7 , 8 ,  , 11 , 5] , 9))