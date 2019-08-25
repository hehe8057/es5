var obj= {
    id:1,
    name:"tom",
    age:12,
    gender:"male"
}
for (var key  in obj){
    var value = obj[key];
    console.log(key,value);
}
