var Marks :number[] =[11,21,51,101,111];
console.log("Array traversal using For loop");
var i: number=0;

for(i=0;i<5;i++){

    console.log(Marks[i]);
}

console.log("Array traversal using While loop");
i=0;
while(i<Marks.length){
    console.log(Marks[i]);
    i++;
}
console.log("Array traversal using do-While loop");
i=0;
do{
    console.log(Marks[i]);
    i++;
}
while(i<Marks.length);