var result = 1;
for(var i=1;i<=10;i++){
    result=result*i;
}
console.log(result);

var a = 1;var b = 1;
while(b<=10){
    a *=b;
    b++;
}
 console.log(a);

var x=1,y=1;
do{
    x *=y;
    y++;
}while(y<=10)

console.log(x);


//递归
function test(i){
    if(i<1){
        return 1;
    }else{
        return test(i-1)*i;
    }
}

var result = test(10);
console.log(result);
