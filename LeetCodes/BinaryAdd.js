function AddBinary(a, b) {
    // Convert binary strings to integers
    let num1 = BigInt('0b' + a); 
    let num2 = BigInt('0b' + b);
    

    let sum = num1 + num2;

    let sumBinary = sum.toString(2);
    
    return sumBinary;
}

// Example usage
console.log(AddBinary("1", "11")); // Output: "111"
