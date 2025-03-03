const num1=43
const num2=42
const num3=41

console.log(Math.max(num1,num2,num3));

//Another way

if(num1>num2)
{
    if(num1>num3)
    {
        console.log(num1);
    }
    else
    console.log(num3);
}
else if (num2>num3) 
    {
    console.log(num2);
    }
    else
    {console.log(num3);
    }
