for (var i=100;i<=999;i++){
    var a=parseInt(i/100)*parseInt(i/100)*parseInt(i/100);
    var b=parseInt((i%100)/10)*parseInt((i%100)/10)*parseInt((i%100)/10);
    var c=parseInt(i%10)*parseInt(i%10)*parseInt(i%10);
    if(i == a+b+c){
        console.log(i);
    }
}

