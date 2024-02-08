function CheckEven(No:number):boolean{

    if(No %2==0){
        return true;
        //console.log("It is even number");
    }else{
        return false;
        //console.log("It is odd number");
    } 
}
var value1:number=11;
var Result :boolean;
Result=CheckEven(value1);
if(Result==true){
    console.log("It is Even number");

}else{
    console.log("It is odd Number");
}