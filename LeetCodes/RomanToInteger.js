function RomanToInteger(roman){
    let romanNumerals = {
        'I': 1, 'V': 5, 'X': 10, 
        'L': 50, 'C': 100, 'D': 500, 
        'M': 1000 }
        let integer = 0;
        for (let i = 0; i < roman.length; i++) {
          if( romanNumerals[roman[i]] < romanNumerals[roman[i+1]]){
            integer -= romanNumerals[roman[i]] ;

          }  
          else{
            integer += romanNumerals[roman[i]] ;
          }}
          
        return integer
}
console.log(RomanToInteger("CXVII"));
