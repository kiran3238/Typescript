//Function Defination
function DisplayAddition(Arr) {
    console.log("Element of array are:");
    var i = 0;
    var sum = 0;
    for (i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum;
}
var Marks = [46, 78, 77, 90, 89];
//Function Call
var Result = 0;
Result = DisplayAddition(Marks);
console.log("Addition is:" + Result);
