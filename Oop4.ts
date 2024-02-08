//This code for Encapsulation

class Demo2{
    //characteristics
    No1:number;
    No2:number;
    //Parameterised constructor
    constructor(A:number,B:number){
        console.log("inside default constructor");
        this.No1=A;
        this.No2=B;
    }

    //Behaviour
    Display(){
        console.log("Inside Display fun of Demo class");


    }
}
var obj1 =new Demo2(10,11);
var obj2 =new Demo2(20,21);

console.log(obj1.No1);
console.log(obj1.No2);

console.log(obj2.No1);
console.log(obj2.No2);