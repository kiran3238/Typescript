//Addition of array elements

function Addition1(num1:number[]):number{
    var sum:number=0;
    for(var i:number=0;i<num1.length;i++){
        sum=sum+num1[i];
    }
    return sum;

}
var num1:number[]=[23,6,7,4,5,7];
var Result=Addition1(num1);
console.log("Addition of Array Element is:"+Result);
