//This code for Encapsulation
var Demo1 = /** @class */ (function () {
    function Demo1() {
        console.log("inside default constructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    //Behaviour
    Demo1.prototype.Display = function () {
        console.log("Inside Display fun of Demo class");
    };
    return Demo1;
}());
var obj = new Demo1();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
