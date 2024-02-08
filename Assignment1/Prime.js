//Prime number or not
function ChkPrime(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
        if (count > 2) {
            break;
        }
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}
var num = 11;
//var Result:boolean=true;
var Result = ChkPrime(num);
if (Result == true) {
    console.log("It is a Prime Number");
}
else {
    console.log("It is not a Prime Number");
}
