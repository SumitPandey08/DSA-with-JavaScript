var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.trim().split(" ") ;
    for(i = 0 ; i < sentence.length ; i++){
        if(sentence[i].substring(0, searchWord.length) === searchWord){
            return i + 1 ;
        }
    }
    return -1
    
};

console.log(isPrefixOfWord("This Is Sentence with target" , "Sen"))