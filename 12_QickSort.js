function quickSort(array){
    if (array.length < 2) return array
    let pivot = array[array.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-4 , 32 , 5 , -7 , -9 , 1 , -5]));

// Worst Case Big-O = O(n^2)  when arr is already sorted 
// Best Case Big-O = O(n log n) when arr is not sorted "here n of loop and halfing causes logn"

