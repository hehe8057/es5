var arr = new Array(1,2,3,true,5);
console.log(arr.length,arr);

for(var i=0;i<arr.length;i++){
    var val = arr[i]
    console.log(val);
}

for(var key in arr){
    console.log(arr[key]);
}
