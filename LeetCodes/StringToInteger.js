function StrToInt(str){
    let match = str.match(/^-?\d+/);
    match.trim()
    if (match) {
         let number = parseInt(match[0], 10); // Clamp the number within the 32-bit signed integer range 
         if (number < -(2**31)) {
             return -(2**31); } 
         else if (number > 2**31 - 1) {
             return 2**31 - 1; } 
             else 
             { 
                return number; 
            } } else { return 0; // Return 0 if no valid integer is found 
                }

}
console.log(StrToInt("-      042"));
