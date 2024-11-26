// function plusOne(num){
//     let num1 = parseInt(num.join('')) ;
//     num1 = num1 + 1 ;
//     return num1.toString().split('');
// }

function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// Example usage
let num = [1, 2, 9];
// console.log(num.unshift(1))
console.log(plusOne(num)); // Output: [1, 3, 0]

num = [9, 9, 9];
console.log(plusOne(num)); // Output: [1, 0, 0, 0]

console.log(plusOne([9]))



