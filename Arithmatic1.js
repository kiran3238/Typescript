var Arithmatic1 = /** @class */ (function () {
    function Arithmatic1(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    //parameter pass nahit zale nahit mhanun pass zala asaa nahii te object madhun miltat  ani ithe function keyword jato bcz hee apan class chya at madhe write kelay
    Arithmatic1.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic1.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic1;
}());
var obj5 = new Arithmatic1(11, 10);
var obj4 = new Arithmatic1(13, 10);
console.log(obj5.No1);
console.log(obj5.No2);
var Result = 0;
Result = obj5.Addition();
console.log(Result);
Result = obj4.Substraction();
console.log(Result);
