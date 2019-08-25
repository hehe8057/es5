Array.prototype.myPop = function(){
    var l = this[this.length-1];
    this.length--;
    return l;
}
var arr = [1,2,3];
var result = arr.myPop();
console.log(result,arr);
