const myarray = ['hitesh', 23 , 45 , 18]
const reversed = myarray.toReversed()
// console.log(myarray);
// console.log(reversed);

// // Concatinating Arrays 

// method 1 - .push

const array2 = [23 , 'baljeet', 1818 , 4545 ,true]
// array2.push(myarray)
// console.log(array2);

// method 2 - .concat

// const array3 = myarray.concat(array2)
// console.log(array3);


// method 3 - split 

// const array3 = [...myarray , ...array2]
// console.log(array3);


//other important prototypes 

// console.log(Array.isArray(array2))
// console.log(Array.isArray('baljeet'))

// console.log(Array.from('baljeet')) // string is iterable hence , non empty array
// console.log(typeof Array.from(54363)) //empty array as number is not iterable 

// score1 = 100
// score2 = '200'
// score3 = true
// console.log(Array.of(score1 , score2 , score3));

