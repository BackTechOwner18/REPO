// Two options for declaring Arrays 

const array=['hitesh' , 23 , true , "Baljeet"] // option 1
const array2 = new Array('hitesh', 23 , true , "Baljeet") //option 2

// Printing arrays and their components 

// console.log(array);
// console.log(array2[3]);
// console.log(array2[4]); //undefined as indexing out of array

// console.log(array.includes('Baljeet'));
// console.log(array.indexOf(34));



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Arrays Functions 

//  array2.push(23)
// console.log(array2);

// array2.pop()
// console.log(array2);

// array2.shift()
// array2.unshift('bdskgkbskbfks')
// console.log(array2);


const newArray = ['hitesh', 'baljeet', 'gvfhsh', true , 2332]

console.log(`A - ${newArray}`);
console.log(newArray.slice(2,3)) // first parameter is starting index while 2nd parameter is ending index + 1 
console.log(`B - ${newArray}`)


console.log(newArray.splice(2,3)) // first parameter is starting index while 2nd parameter states how many values u want to remove from the array 
console.log(`c - ${newArray}`)


//slice doesnot have any changes in the original array
// splice makes changes happen in the original array as well

//slice and splice have different parameter functions (read above info for details)

