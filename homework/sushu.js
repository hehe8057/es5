for(var b=101;b<=200;b++){
    var a=1;
    for( var i=2;i<b;i++){
        if(b % i != 0){
            a=1;
        }else{
            a=0;
            break;
        }
    }
    if(a==1){
        console.log(b);
    }
}
