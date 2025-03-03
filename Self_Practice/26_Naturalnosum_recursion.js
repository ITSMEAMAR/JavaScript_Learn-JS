let val=99
let i=0
let c=0
function sumof(a,b,sum){
    b++
    if(a==b)
        return sum+val
    return sumof(a,b,sum+b) 
}

console.log(sumof(val,i,c));
