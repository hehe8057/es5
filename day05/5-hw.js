Array.prototype.mysort = function(){
    for(var i=0;i<this.length;i++){
        this[i] = this[i]+"";
    }
    for(var x=0;x<this.length-1;x++){
        for(var y = x+1;y<this.length;y++){
            if(this[x]>this[y]){
               var a= this[x];
               this[x] =this[y];
                this[y] = a;
            }
        }
    }
    return this;
}


var arr = [3,
    24,
    12,
    9,
    53
];
console.log(arr);

arr.mysort();
console.log(arr);
