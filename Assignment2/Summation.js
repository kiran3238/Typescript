//Addition of array elements
function Addition1(num1) {
    var sum = 0;
    for (var i = 0; i < num1.length; i++) {
        sum = sum + num1[i];
    }
    return sum;
}
var num1 = [23, 6, 7, 4, 5, 7];
var Result = Addition1(num1);
console.log("Addition of Array Element is:" + Result);
