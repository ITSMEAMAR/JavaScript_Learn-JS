const name="amar"
const repocount=50

//console.log(name+ repocount   );

//console.log('hi my name is ${} and my repo count is ${repocount} '); // needs to invatigate

const gamename= new String("BGMIANDCounterstrike")

console.log(gamename[0]); // check the any letter at specific position
console.log(gamename.length); // check the length
console.log(gamename.toLowerCase());    //tom make lowercase
console.log(gamename.toUpperCase());    //to make Uppercase
console.log(gamename.charAt(3));    //check the position of char at specific postion
console.log(gamename.indexOf('I'));   //check that letter is present at which index

const newstr=gamename.substring(3,14)       //inbetween chacters to some range
console.log(newstr);

const newstr2=gamename.slice(-10,3)     
console.log(newstr2);               //same as per above

const newstr3=" amar    "
console.log(newstr3);
console.log(newstr3.trim());            //removes the Space


const newstr4="sdhjkdhjsdkl dnmdn"
console.log(newstr4.replace(' ','dsc')); // replace based on your requirement

const newstr5="dmkdm-dskmcdk-sdkmk-dfmdk-wdfkm-edmdfpc"
console.log(newstr5.split('-'));
console.log(newstr5.length);




