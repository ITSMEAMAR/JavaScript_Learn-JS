let a =60
let b=36
let res=Math.min(a,b)
//console.log(Math.min(a,b));
while (res>0) {
    if(a%res==0 && b%res==0)
    {
        break
    }
    res--  
}
console.log(res);
