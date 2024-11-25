function palindrome(n){
    let str = n.toString();
    let reverse = str.split('').reverse().join("") ;
    return str === reverse;

}

console.log(palindrome(12321)); // true
console.log(palindrome(123456)); // false


