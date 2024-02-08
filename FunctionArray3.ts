// function madhe array return kartoy
function Demo():number[]
{
    
    return new Array(10,20,30,40);
}
var Arr : number[]=Demo();

console.log("Element of Array:");
var i:number=0;

for(i=0;i<Array.length;i++){
    console.log(Arr[i]);
}