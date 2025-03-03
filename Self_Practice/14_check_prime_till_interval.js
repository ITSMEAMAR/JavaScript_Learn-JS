const intervl=1000
let num1=1
let count2=0
//console.log(Math.ceil(num1/2));
while (num1>0&&num1<=intervl){
    let count=0
    num1++
for (let i = 1; i <= Math.ceil(num1/2); i++) {
    if(num1%i==0)
    {
        count++
    }
}
if (count==1) {
    console.log(num1);
    count2++
}
}
console.log(count2);

//