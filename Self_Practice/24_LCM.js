let a =4
let b=8
let res=Math.min(a,b)
while (res>0) {
    if(a%res==0 && b%res==0)
    {
        break
    }
    res--  
}

console.log((a*b)/res);
