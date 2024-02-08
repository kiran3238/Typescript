class Arithmatic{

    public No1:number;
    public No2:number;

    constructor(A:number,B:number){
        this.No1=A;
        this.No2=B;
    }
    //parameter pass nahit zale nahit mhanun pass zala asaa nahii te object madhun miltat  ani ithe function keyword jato bcz hee apan class chya at madhe write kelay
    Addition():number{
        var Ans :number;
        Ans=this.No1+this.No2;
        return Ans;

    }
    Substraction():number{
        var Ans :number;
        Ans=this.No1-this.No2;
        return Ans;
        
    }

}
var obj5=new Arithmatic(11,10);
var obj4=new Arithmatic(13,10);


var Result :number=0;
Result=obj5.Addition();
console.log(Result);

Result=obj4.Substraction();
console.log(Result);

