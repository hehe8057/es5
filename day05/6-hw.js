var students = [{
    id:1,
    name:"terry",
    age:12,
    grade:89
},{
    id:3,
    name:"larry",
    age:9,
    garde:92
},{
    id:2,
    name:"tom",
    age:13,
    grade:99
},{
    id:4,
    name:"jacky",
    age:11,
    grade:85
}]
console.log(students);
console.log("");
students.sort(function(){
    for( var i=0;i<students.length-1;i++){
        for(var x=1;x<students.length;x++){
             if(students[i].id>students[x]){
                 return 1;
             }else{
                 return -1;
             }
        }
    }
});
console.log(students);
