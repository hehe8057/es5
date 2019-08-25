function add(a){
    console.log(arguments);
    var result = 0;
    for(var key in arguments){
        var val=arguments[key];
        result +=val;
    }
    return result;
}

var result = add(1,2,3,4,5,6,7,8,9,10);
console.log(result);
