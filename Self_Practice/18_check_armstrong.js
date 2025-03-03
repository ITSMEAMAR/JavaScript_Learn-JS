let num1=407
const numb=num1
let num2=0
let dig=num1.toString().length

while(num1!=0)
{
    num2=num2+Math.pow(num1%10,dig)
    num1=Math.floor(num1/10)
}
//console.log(num2);
if (numb==num2) {
    console.log("This Number is Armstrong Number");
    
} else {
    console.log("This Number is Not Armstrong Number");

}
