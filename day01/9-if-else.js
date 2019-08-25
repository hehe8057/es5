var day=5;
if(day==1){
    console.log("今天是周一");
}else if(day==2){
    console.log("今天是周二");
}else if(day==3){
    console.log("今天是周三");
}else if(day==4){
    console.log("今天是周四");
}else if(day==5){
    console.log("今天是周五");
}else if(day == 6 ||day ==7) {
    console.log("今天是周末");
}

switch (day){
    case 1:
        console.log("今天是周一")
        break;
    case 2:
        console.log("今天是周二")
        break;
    case 3:
        console.log("今天是周三")
        break;
    case 4:
        console.log("今天是周四")
        break;
    case 5:
        console.log("今天是周五")
        break;
    case 6:
        console.log("今天是周末")
        break;
    case 7:
        console.log("今天是周末")
        break;
    default:
        console.log("你是智障吗，一周七天不知道？")
}
