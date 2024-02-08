//Find largest value from 3 numbers
function Maximum(num1:number,num2:number,num3:number): void{
    if(num1>num2 && num1>num3){
        console.log("Largest Number is :"+num1);
    }
    if(num2>num1 && num2>num3){
        console.log("Largest Number is :"+num2);
    }else{
        console.log("Largest Number is :"+num3);

    }
}
var num1: number=23;
var num2: number=89;
var num3: number=6;
Maximum(num1,num2,num3);