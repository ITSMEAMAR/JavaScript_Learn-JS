//Primitive
//7 category :- String, Number, boolean, null, undefined, symbol, bigInt

const score=100 //number
const scorevalue="100.3" //string
const isLoggedIn=true //boolean
const outsidetemp=null //null
let email;  //undefined
const id= Symbol('123') //symbol
const bignum=32342342341234n //BigInt



//reference type (nonprimitive)

// Array, objects, Functions

const heros =["abc", "ewdfw", "fsdc"]   //array

let obj={name:"amar",
    age : 23
}                           //object

const myfuntion= function(){
    console.log("Hellow");   
}                           //funtion*-

//-----------------------------------------------------------------------------------//

//mmemory 
//Stack(only used for Primitive), Heap(used for non-primitive)
//

let str1="abcdfd"
let str2=str1

console.log(str2);
str2="dffff"
console.log(str1);
console.log(str2);


let user={
    name:"abc",
    email:"abc@gmail.com",
    age:23
}

let user2=user
console.log(user2);

user2.email="skddf@gmail.com"
console.log(user);
console.log(user2);

  



