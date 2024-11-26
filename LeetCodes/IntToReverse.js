function  bitIntReverse(n) {
    x = n.toString()
    int = x.split('').reverse().join('')
    x = parseInt(int) ;
    let  INT_MAX = 2**32 ;
    let INT_MIN = -(2**32 - 1)

    if( x > INT_MAX || x< INT_MIN || n>INT_MAX || n<INT_MIN ){
        return 0 ;
    }
    if(n<0 ){
        return -x ;
    }

    return x ;
   
}
console.log(bitIntReverse(-123456))
console.log(bitIntReverse(123456565578)) ;








