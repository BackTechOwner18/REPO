const a = 10
let b =20
var c= 30

if (true)
{
    const a = 200
    let b = 300
    var c= 400
    console.log(`inner = ${a}`);
    
}

console.log(`outside = ${a}`);    //not defined outside the scope of if and gives error
console.log(b);    //not defined outside the scope of if and gives error
console.log(c);    //doesnot follow scope low and gives the value outside the block scope

// THATS THE REASON var IS NOT USED WHEN INTIALIZING VARIABLES