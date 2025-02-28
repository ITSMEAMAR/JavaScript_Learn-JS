let score="33abc"  // if we are giving only number then it will print the number

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); // if we are giving only number then it will print the number as 33 but currently we have string and integer that's why it's ginving NAN

let scores=null  //
console.log(typeof scores);
console.log(typeof (scores));

let valueInNumbers = Number(scores)

console.log(typeof valueInNumbers);
console.log(valueInNumbers); // if we are giving only number then it will print the number as 33 but currently we have string and integer that's why it's ginving NAN


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1--> true   0-->false
//""--> false, "abc"=true

let num=233
let somnum=String(num)
console.log(somnum);
console.log(typeof somnum);
