function mergeSort(list1 , list2){
  
   if (list2.length !== null || 0) {
     for (let i = 0; i < list2.length; i++) {
         list1.push(list2[i]);
     }
   } else {
    return list1;
    
   }

    for(let i = 1; i < list1.length; i++){
        let numberToInsert = list1[i] ;
        let j = i -1 ;
        while(j >= 0 && list1[j] > numberToInsert){
           list1[j+1] = list1[j]
           j-- ;
       }
       list1[j+1] = numberToInsert ;
   }
   return list1 
     
}
console.log(mergeSort([1 , 2  ,3 ] , [ 2 , 3  ,4 ]))