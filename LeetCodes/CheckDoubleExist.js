function checkDouble(arr){
    for(i = 0 ; i < arr.length ; i++){
        for(let j = 1 ; j < arr.length ; j++){
            if(i !== j && (arr[i] == 2*arr[j] || arr[i] == arr[j]/2 )){
                return true ;
            }
        }
    }
    return false;
} 
console.log(checkDouble([-2,0,10,-19,4,6,-8]));

function checkIfDoubleExists(arr) {
    let seen = new Set(); // Initialize a set to store elements

    for (let num of arr) {
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true; // If the double or half exists in the set, return true
        }
        seen.add(num); // Add the current number to the set
    }

    return false; // If no double is found, return false
}

// Example usage
let arr1 = [10, 2, 5, 3];
let arr2 = [7, 1, 14, 11];

console.log(checkIfDoubleExists(arr1)); // Output: true (10 and 5)
console.log(checkIfDoubleExists(arr2)); // Output: true (14 and 7)

