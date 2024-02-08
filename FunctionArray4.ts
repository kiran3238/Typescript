// function madhe array return kartoy
function Demo():number[]
{
    
    var Marks:number[]=[10,20,30,40];
    return Marks;

}
var Arr1 : number[]
Arr1=Demo();

console.log("Element of Array:");
var i:number=0;

for(i=0;i<Array.length;i++){
    console.log(Arr1[i]);
}