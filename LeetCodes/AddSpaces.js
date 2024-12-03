var addSpaces = function(s, spaces) {
    let result = '';
  let spaceIndex = 0;

for(let i = 0 ;  i < s.length ; i++){
  if(spaceIndex < spaces.length && i === spaces[spaceIndex]){
      result += ' ' ;
      spaceIndex++;
  }
  result += s[i] ;
}
return result ;

};

console.log(addSpaces("HelloMyNameIsJavisIamAI" , [5 , 7 , 11 , 13 , 18 , 19 , 21 , 23]))