function sayHello(){
      console.log("helloworld");
 }
sayHello();
var foo=sayHello;
foo();
//console.log(foo);

var obj = {
    foo:foo
}
obj.foo();
//console.log(obj.foo);
