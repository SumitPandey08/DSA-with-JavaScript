// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

Array.prototype.last = function(){
    if(this.length === 0){
        return -1 ;
    }
    
    return this[this.length - 1]
}

array = [ 1 ,2 ,3 ,4 ,5 ,5 ]
console.log(array.last()) ; 