//The standard form of a quadratic equation is
//ax2 + bx + c = 0, where
//a, b and c are real numbers and
//a ≠ 0

let a=1
let b=6
let c=5

let div=(b*b)-(4*a*c)
let root1=(((-b)+Math.sqrt(div))/(2*a))
let root2=(((-b)-Math.sqrt(div))/(2*a))

if (div>0) {
    console.log(root1,root2);
    
}
else if (div=0) {
    console.log(-b/2*a);
    
} else {
    console.log((root1-b)/2*a, (root1+b)/2*a);
    
}
console.log(div);
