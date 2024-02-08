var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var obj5 = new Arithmatic(11, 10);
var obj4 = new Arithmatic(11, 10);
var Result = 0;
Result = obj5.Addition();
console.log(Result);
Result = obj4.Substraction();
console.log(Result);
