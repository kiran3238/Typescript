//find largest element in array
function MaximumNum(arr) {
    var max = Number.MIN_VALUE;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var Result = 0;
Result = MaximumNum(arr);
console.log("Largest Element in the array is:" + Result);
