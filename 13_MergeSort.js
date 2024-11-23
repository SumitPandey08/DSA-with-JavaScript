function mergeSort(array){
    if(array.length < 2){
        return array ;
    }
    let mid = Math.floor(array.length/2) ;
    let left = array.slice(0,mid);
    let right = array.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left , right){
    let result = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift());
        }
       else{
        result.push(right.shift());
       } 
    }
    return [...result , ...left , ...right]

}

console.log(mergeSort([-2 , -11 , -34 , 4 , 54, 9]));

// Big-O = O(nlogn)  logn from 1st function asits keep getting half and n from 2nd function for one loop

