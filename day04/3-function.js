var add = function(a,b){
    var result = a+b;
    return result;
}
 var bar = add();
var foo = add;
console.log(bar);
console.log(foo);

var obj = {
    name:"lixianwen",
    foo:foo
}
console.log(add === foo);
console.log(add === obj.foo);
