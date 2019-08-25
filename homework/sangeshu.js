for(var a = 1;a<=4;a++){
    for(var b = 1;b<=4;b++){
        for(var c = 1;c<=4;c++){
            if(a!=b&&b!=c&&c!=a){
                console.log(a*100+b*10+c);
            }
        }
    }
}
