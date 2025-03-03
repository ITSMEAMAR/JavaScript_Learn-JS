let num1=1
const numb=500
let num3=1
while(num3<=numb){
    let num2=0
    num1=num3

    let dig=num3.toString().length
    while(num1>0 && num1<numb)
    {
        num2=num2+Math.pow(num1%10,dig)
        num1=parseInt(num1/10)
    }
    if (num2==num3) {
        console.log(num2); 
    } 
    num3=num3+1
    num1=num3
    //num1++;
    //console.log(num2);
}
