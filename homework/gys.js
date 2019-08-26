function gys(a,b){
    var min = Math.min(a,b);
    var max = Math.max(a,b);
    for(var i=min;i>1;i--){
        if(a%i== 0 && b%i ==0 ){
            console.log("最大公约数为:",i);
            break;
        }
    }
    for(var j = max;j<a*b;j++){
        if(j%a ==0 && j%b ==0){
           console.log("最小公倍数:",j);
            break;
        }
    }
}

gys(4,12);
