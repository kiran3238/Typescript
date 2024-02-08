function Addition1(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substaction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var value1 = 11;
var value2 = 10;
var Result = 0;
Result = Addition1(value1, value2);
console.log("Addition is:" + Result);
Result = Substaction(value1, value2);
console.log("Subsraction is:" + Result);
