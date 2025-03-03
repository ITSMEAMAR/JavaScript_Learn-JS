function fibonacci(maxval,a,count,b) {
    if (count<maxval+1) {
        count++    
        b=a-b   
    if (a==0) {
        console.log(a);
        a++
        
    }
    console.log(a);
    if (count==maxval) {
        console.log(a+b);
    }
    return fibonacci(maxval,a+b,count,b)
    }
}



fibonacci(40,0,1,0)
