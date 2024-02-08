//take number and find out their factors
function Displayfactors(num:number):void{

    for(var i:number=0;i<num;i++){
        if(num%i==0){
            console.log(i);
        }
    }
}
var num:number=20;
Displayfactors(num);