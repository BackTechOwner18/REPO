
// function function1()
// {
//     console.log("S");
//     console.log("A");
//     console.log("N");
//     console.log("A");
//     console.log("M");
// }
// function1()

// function useless (number1 , number2){
//     console.log(number1+number2)
// }
// useless() //prints NaN as no arguement is passed
// useless(2,4) //prints 6
// useless(2,"4") //prints 24 as '4' behaves as string


// function useless (number1 , number2){
//     return number1+number2
// }
// /onst sum = useless(4,6)/ c
//     // console.log(sum); //prints the returned value(10)
// const sum = useless(4 ,true) //true gets coverted into 1 , overall returns 5
// console.log(sum);

function userLogged (username){         //if username="somebody" passed in parameter parethesis , default value of username = "somebody" even if no value passed in arguement
if(!username) // can also be written as if(username === undefined)
{
    console.log("Please enter a username");
   return 
    
}
    // console.log(`${username} just logged in!`);
    return `${username} just logged in!`

}
let isUserLOgged = userLogged() //Please enter a username
console.log(isUserLOgged); 
isUserLOgged = userLogged("Baljeet") //Baljeet just logged in!
console.log(isUserLOgged); 

