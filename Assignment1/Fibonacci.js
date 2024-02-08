//input:21
//output: 1 1 2  3 5  8 13 21
function fibonacci(num) {
    var a = 0;
    var b = 1;
    var c = 1;
    for (var i = 0; c <= num; ++i) {
        console.log(c);
        c = a + b;
        a = b;
        b = c;
    }
}
var num = 21;
fibonacci(num);
