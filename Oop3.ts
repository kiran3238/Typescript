//This code for Encapsulation

class Demo1{
    //characteristics
    No1:number;
    No2:number;
    //Default constructor
    constructor(){
        console.log("inside default constructor");
        this.No1=0;
        this.No2=0;
    }

    //Behaviour
    Display(){
        console.log("Inside Display fun of Demo class");


    }
}
var obj =new Demo1();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);