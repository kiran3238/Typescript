//take number and find out their factors
function Displayfactors(num) {
    for (var i = 0; i < num; i++) {
        if (num % i == 0) {
            console.log(i + " ");
        }
    }
}
var num = 20;
Displayfactors(num);
