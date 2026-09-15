
// console.log(newDate.toLocaleString("en-IN", {timeZone : "Asia/Kolkata", hour12:true}))

// console.log((newDate.getFullYear()));

let newCreatedDate = new Date(2023 , 10 , 19 , 22 , 30 , 30)
// console.log(newCreatedDate.toLocaleString('en-IN'));
const months=['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let newDate = new Date()

// console.table([newDate.getFullYear(),months[newDate.getMonth()],newDate.getDate(), newDate.getHours(), newDate.getMinutes(), newDate.getSeconds()])
// console.log(newCreatedDate.toDateString());
// console.log(newCreatedDate.toLocaleString('en-IN',{ timeZone:"Asia/Kolkata"}));

console.log(newCreatedDate.toLocaleDateString())
console.log(newCreatedDate.toLocaleTimeString())
