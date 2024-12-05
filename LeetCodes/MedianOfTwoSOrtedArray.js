var findMedianSortedArrays = function(arr1, arr2) {
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
    let result = [];

    // Iterate through both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Append remaining elements from arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Append remaining elements from arr2
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    let mid = Math.floor(result.length / 2);

    if (result.length % 2 === 0) {
        // If even, average the two middle elements
        return (result[mid - 1] + result[mid]) / 2;
    } else {
        // If odd, return the middle element
        return result[mid];
    }
};


