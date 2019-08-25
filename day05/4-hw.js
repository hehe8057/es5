Array.prototype.myUnshift = function(){
    var l = this.length+arguments.length;
    var nthis=[];
    for(var key in arguments){
             nthis[key]= arguments[key];

    }
    var len = nthis.length;
    for(var x =0;x<this.length;x++){
           nthis[len+(+x)] = this[x];
    }
    for(z=0;z<nthis.length;z++){
        this[z]=nthis[z];
    }
    return l;
}

var arr=[
    3,
    4,
    5
]
var result = arr.myUnshift(1,2);
console.log(result,arr);
