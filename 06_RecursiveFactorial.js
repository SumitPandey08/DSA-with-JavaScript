
function RecursiveFactorial(n){
  
    if(n === 0){
        return 1
        }
       
        return (n * RecursiveFactorial(n-1)) ;
}

console.log(RecursiveFactorial(0));
console.log(RecursiveFactorial(1));
console.log(RecursiveFactorial(10));
//Big-O = O(n) linear


//consept func is runing many time as previous