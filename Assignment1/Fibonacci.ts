//input:21
//output: 1 1 2  3 5  8 13 21
function fibonacci(num:number):void{
    var a:number=0;
    var b:number=1;
    var c:number=1;
   
    for(var i:number=0;c<=num;++i){
       
        console.log(c);
        c=a+b;
        a=b;
        b=c;
        
        
    }
}
var num:number=21;
fibonacci(num);