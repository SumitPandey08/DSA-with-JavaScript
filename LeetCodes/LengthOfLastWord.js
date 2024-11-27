function lengthOfLastWord(string){
    string = string.trim().split(' ')
    return string[string.length - 1].length
}
console.log(lengthOfLastWord("hello world how are you"))