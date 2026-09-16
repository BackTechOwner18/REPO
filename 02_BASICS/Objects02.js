const newObj = new Object()
newObj.email= "smthing@google.com"
newObj.name = "Baljeet Singh"
newObj.isLoggedIn = false

// console.log(newObj)

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = { 3 : "c" , 4 : "d"}
// const obj3 = Object.assign(obj1 , obj2) //assign method for adding/concatinating two objects
// const obj3 = {...obj1 , ...obj2} // split method for adding/concatinating two objects
// console.log(obj3);


// OBJECT NESTING

const Regular = {
    name : "smthing",
    username : {
        fullName : {
            firstName : "Baljeet",
            lastName : "Singh"
        }
    }
}
 
// console.log(Regular.username);
// console.log(Regular.username.fullName);
// console.log(Regular.username.fullName.firstName);

const random = [
    sanam = {
        name  : "baljeet",
        email : "nbfbjs@google.com"
    },
    sanam2 = {
        name  : "baljsingheet",
        email : "nesgbfbjs@google.com"
    },
    sanam3 = {
        name  : "baljeet",
        email : "ngzrbfbjs@google.com"
    },
    sanam4 = {
        name  : "baljeet",
        email : "gzrrgnbfbjs@google.com"
    },,
    sanam5 = {
        name  : "baljeet",
        email : "nggcbfbjs@google.com"
    },
    53 ,false , 'false'
]
// console.log( random[0])
// console.log( random[6])
// console.log( random[7])
// console.log(typeof random[7])
// console.log( random[8])
// console.log(typeof random[8])

// console.log(Object.keys(newObj))
// console.log(Object.values(newObj))
// console.log(Object.entries(newObj))
// console.log(newObj.hasOwnProperty('email'));
// console.log(newObj.hasOwnProperty('emailId'));

