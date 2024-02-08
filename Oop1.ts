
function Addition1(No1:number,No2:number):number{

    var Ans:number=0;
    Ans=No1+No2;
    return Ans;
}
function Substaction(No1:number,No2:number):number{

    var Ans:number=0;
    Ans=No1-No2;
    return Ans;
}
var value1:number=11;
var value2:number=10;
var Result:number=0;

Result=Addition1(value1,value2);
console.log("Addition is:"+Result);

Result=Substaction(value1,value2);
console.log("Subsraction is:"+Result);

