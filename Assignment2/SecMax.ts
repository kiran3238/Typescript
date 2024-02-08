
//find the second max element in the array
function SecondMax(arr1:number[]):number{
    var Max:number=Number.MIN_VALUE;
    var temp:number=Number.MIN_VALUE;

    for(var i:number=0;i<arr1.length;i++){

        if(arr1[i]>Max){
            temp=Max;
            Max=arr1[i];
        }else if(arr1[i]>temp && arr1[i]!=Max){
            temp=arr1[i];
        }

    }
    return temp;

}
var arr1:number[]=[23,89,6,29,56,45,77,32];
var Result1=SecondMax(arr1);
console.log("Second Largest Element in the array is:"+Result1);