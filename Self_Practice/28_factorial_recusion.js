function fact(total, a, b)
{
          if (total==0) {
                    console.log(total);
                    
          }
          if (total<0) {
                    console.log(0);
                    
          }
          if(a<total){
                    b=b*a
                    a=a+1
                    return fact(total, a, b)
          }
          if (a==total) {
                    b=b*a
                    a=a+1
                    console.log(b);
                    return fact(total,a , b)
                    
          }
          //else return
}


fact(10,1,1)

