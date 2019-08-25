Array.prototype.myPush = function(){
    var len = this.length;
    for(var key in arguments){
        var item = arguments[key];
        this[len+(+key)]=item;
    }
    return this.length;
}

var arr = [];
var result = arr.myPush("terry","larry","tom");
console.log(result,arr);
