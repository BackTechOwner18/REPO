// console.log(2 > 1);
// console.log(2 == 1);
// console.log("2" > 1) // automatically string converts into number (automatic implicit conversion)
// console.log("2"== 1) // automatically string converts into number (" "  " " " " " " " " " " " " )
// console.log("1"=== 1) // returns false


console.log(null == 0); // null doesnot get converted into 0 wile using ==
console.log(null > 0); // null gets converted into 0 while using < or > or <= or >= operators - returns false in this case
console.log(null >= 0); // null gets converted into 0 while using < or > or <= or >= - returns true in this case
// console.log(null === 0); // null gets converted into 0 while using < or > or <= or >= - returns true in this case


//exact same with undefined as  well

 
// console.log(undefined > true);
// console.log(undefined == true);
// console.log(undefined >=true); // when using comparison brackets < or > or <= or >= both sides gets converted into number first and are then compared
// // // null -> 0 
// //undefined -> NaN
// console.log();

// console.log(null> true);
// console.log(null == true);
// console.log(null >=true);
// console.log(null >=false); // null -> 0 , false -> , true -> 1
 
