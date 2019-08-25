Array.prototype.myShift = function(){
    var l= this[0];
    for(var i=0;i<this.length;i++){
         this[i] = this[i +1 ];
    }
    this.length--;
    return l;
}
var arr = [
    1,
    2,
    3
];
var result = arr.myShift();
console.log(result,arr);
