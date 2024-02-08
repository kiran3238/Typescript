//find largest element in array
function MaximumNum(arr:number[]):number{
    var max=Number.MIN_VALUE;
    for(var i:number=0;i<arr.length;i++){

        if(arr[i]>max){
            max=arr[i];
        }
        
    }
    return max;
}
var arr:number[]=[23,89,6,29,56,45,77,32]; 
var Result:number=0;
Result=MaximumNum(arr);
console.log("Largest Element in the array is:"+Result);