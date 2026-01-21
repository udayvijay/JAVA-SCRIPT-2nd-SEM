// let numbers = [1, 2, 3, 4, 5];
// let sliced = numbers.slice(1, 4);
// console.log(sliced);

// let number = [2, 4, 6, 8, 10];
// let allEven = number.every(x => x % 2 === 0); 
// console.log(allEven);


// let numbers = [1, 3, 5, 7, 9];
// let hasEven = numbers.some(x => x % 2 === 0);
// console.log(hasEven);


let fruits = ["apple", "banana", "cherry"];
let newfruits = fruits.splice(1, 1, "orange", "grape"); 
console.log(newfruits)
console.log(fruits);