function arrays(m, n) {
    let arr = [...m, ...n]; // Combine both arrays
    arr.sort((a, b) => a - b); // Sort the array

    // Check if the length of the array is odd
    if (arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)]; // Return the middle element
    } else {
        // Return the average of the two middle elements
        const mid1 = arr[Math.floor((arr.length - 1) / 2)];
        const mid2 = arr[Math.floor(arr.length / 2)];
        return (mid1 + mid2) / 2;
    }
}

console.log(arrays([1, 2, 4], [2, 4, 5])); 
