function reverseString(str){
    let arr 
    arr = str.split(" ").trim()
    revstr = ""
    for(i = arr.length - 1 ; i >= 0 ; i--){
        if (arr[i] !== "") { // Skip empty strings to handle multiple spaces 
            revstr += arr[i] + (i > 0 ? " " : ""); }
    }
    return revstr
}
console.log(reverseString("Hello World"))