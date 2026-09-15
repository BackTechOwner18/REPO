// Two types of data types - Primitive and non primitive 

//primitive - 7
//string , number , bigint, boolean , Symbol, null , undefined

//non - primitive - array ,objects , function 

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null

let userEmail;

const check1=Symbol(123)
const check2=Symbol(123)
// console.log(check1==check2);
// console.log(typeof check1);


const bigNumber=3425432635635n 
// console.log(typeof bigNumber);

// const Array1=["baljeet", "aviral",11, 09]
// console.log(Array1);

// const user= {
//     name: 'Baljeet',
//     age: 17,
//     profession:"backend dev"
// }
// console.log(user);

const func=function()
{
console.log("hello world");
console.log(23)
}

// console.log(typeof func);
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);

//============================================================================

// Two types of memory storage - Stack (primitive ) , heap (non primitive)
 
// stack - 
let MyName="baljeet"
let AnotherName=MyName
AnotherName="aviral"

// console.table([MyName, AnotherName])

// let obj={
//     name : "baljeet",
//     email : "baljeet342@gmail.com"
// }

// let obj2=obj
// obj2.name="aviral"
// obj2.email="bhbhafdv@gmail.com"

// console.table([obj, obj2])

// Heap acts as a reference while Stack acts as a copy 
// changin heap value changes entire reference where as changing stack value changes merely the created copy