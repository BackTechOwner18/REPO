// Immediately Invoked Function Expressions (IIFE)

// function chai()
// {
//     console.log(`logged in`);
    
// }
// chai()

(function chai()
{
    console.log(`logged in!`);
    
})();       //named iife


((name) => {
    console.log(`${name} logged in!`)
    })('baljeet')       //first parenthesis for parameters and second for calling the function(includes arguements)
    
    //unnamed iife using arrow function

    //done
