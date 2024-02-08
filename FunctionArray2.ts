//Function Defination
function DisplayAddition(Arr:number[]):number{

    var i: number=0;
    var sum:number=0;
    for(i=0;i<Arr.length;i++){
       sum=sum+Arr[i];
    }
    return sum;

    

}

var Marks: number[] =[46,78,77,90,89];
//Function Call
var Result:number=0;
Result=DisplayAddition(Marks);
console.log("Addition is:"+Result);