function percentage(Marks :number, outof:number):number {

    var Result : number=0;
    Result=((Marks / outof)*100);
    return Result;
}
var Ans: number=0;

Ans = percentage(89,100);
console.log("Percentage is:"+Ans);
//var Ans1:number=0;
//Defualt Argument
Ans=percentage(89);
console.log("Percentage is:"+Ans);


