//var result= buyWater(3);
//console.log(buyWater);

//function buyWater(money){
var buyWater = function(money){
    var result;
    switch(money){
         case 2.0:
           result = "农夫山泉";
            break;
         case 3.0:
            result = "百事可乐";
            break;
         case 5.5:
            result = "红牛";
            break;
         default:
            result = "水";
    }
    return result;
}
var result = buyWater(3);
console.log(result);
