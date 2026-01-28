// let user={
//     fullname:"Uday vijay",
//     address:{
//         city:"Jaipur",
//         state:"Rajasthan"},
//     mobileno:1234567890,
//     favcolor:["black","red","white"],
//     demo:function(){
//         return "demo function"
//     }
// }
// console.log(user)
// console.log(user.fullname)
// console.log(user.fullname,user.mobileno,user.favcolor[1],user.address.city,user.demo())
// console.log(`My name is ${user.fullname}. My fav color is ${user.favcolor[0]}`); //string literal
// console.log("My name is " + user.fullname +". My fav color is " +user.favcolor[0]);

//object method

// Object.keys(variable name)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// const car = { 
//     make: "Mahindra",
//     model: "Thar" 
// };
// Object.freeze(car);//we can't add a new key and value pair and we can't change or update the exixting value

// Object.seal(car);//we can't add a new key and value pair but we can change and update the exixting value
// car.model="XUV700"
// car.color="blue"
// console.log(car);



var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo();