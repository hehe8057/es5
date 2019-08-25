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

var a=1;
function jc(x){
    if(x==1){
        return 1;
    }
    a=a*jc(x-1);
}
jc(10);
console.log(a);
