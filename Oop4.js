//This code for Encapsulation
var Demo2 = /** @class */ (function () {
    //Parameterised constructor
    function Demo2(A, B) {
        console.log("inside default constructor");
        this.No1 = A;
        this.No2 = B;
    }
    //Behaviour
    Demo2.prototype.Display = function () {
        console.log("Inside Display fun of Demo class");
    };
    return Demo2;
}());
var obj1 = new Demo2(10, 11);
var obj2 = new Demo2(20, 21);
console.log(obj1.No1);
console.log(obj1.No2);
console.log(obj2.No1);
console.log(obj2.No2);
