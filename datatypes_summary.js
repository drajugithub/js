// Primitive   return type of primitive datatypes are onject
// 7 types : String (call by value),Number,Boolean,Null,Undefined,symbol,
//  BigInt.


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anthorId = Symbol('123')

console.log(id==anthorId);

const bigNumber=1326468466546546544n




 
// reference type (non primitive)  these nin primitive return type is akways function 

//Arrays,Objects,FUnctions

const heros=["raju","virat"];
let my= {
    name: "hitesh",
    age:22,
}

const myFunction =function(){  // function return type id objectfunction
console.log("hello world");
}

console.log(typeof outsideTemp);