function mywork_groupNumber(){
    return 37;
}
function mywork_countSteps(){

    /////////////////////////
    var array = [];
    var count = 0;
    for(var i=0;i<chartData.length;i++){
        console.log(
            chartData[i].xs+","
            +chartData[i].ys+","
            +chartData[i].zs+","
            +chartData[i].as+","
            +chartData[i].bs+","
            +chartData[i].gs);
        array.push(parseFloat(chartData[i].zs));
    }

    for(var i=1;i<array.length-1;i++){
        var a = array[i-1];
        var b = array[i];
        var c = array[i+1];
        if (a<b&&c<b){
            count++;
        }
    }
    return count;
}