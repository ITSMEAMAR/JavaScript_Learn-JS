const num1=7
let count=0
console.log(Math.ceil(num1/2));

if(num1>0){
for (let i = 1; i <= Math.ceil(num1/2); i++) {
    if(num1%i==0)
    {
        count++
        if(count>=2)
        {
            console.log("This is not Prime Number");
            
            break
        }
    }
    
}
}
if (count==1) {
    console.log("This is Prime Number");
    
}