var p1 = {
    name:"hexi",
    age:21,
    sayName:sayName
}
var p2 = {
    name:"lixianwen",
    age:"21",
    sayName:sayName
}

function sayName(){
    console.log("hello my name is"+(this.name));
}

p1.sayName();
p2.sayName();
