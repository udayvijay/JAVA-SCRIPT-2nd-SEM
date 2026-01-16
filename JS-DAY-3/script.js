// let fruits = ["apple", "banana"];
// let newLength = fruits.push("cherry");
// console.log(newLength);
// console.log(fruits)


// let fruits = ["apple", "banana", "cherry"];
// let removed = fruits.pop(); 
// console.log(removed);
// console.log(fruits)

// let fruits = ["apple", "banana", "cherry"];
// let removed = fruits.shift(); 
// console.log(removed)


// Q1
// let arr = [1, 2, 3, 4, 5];
// let reversed = [];
// while (arr.length > 0) {
//     reversed.push(arr.pop());
// }

// console.log(reversed);


// Q2
// let arr2 = [-1, -54, 54, 65, -3, 5];
// let posint = []

// while (arr2.length > 0) {
//     let val = arr2.shift();
//     if (val >= 0) {
//         posint.push(val);
//     }
// }
// console.log(posint);

// Q3

function palindrome(){
    let arr = [1, 2, 3, 4, 5]
    let temp = []
    let original = []
    
    for (let i=0; i<arr.length; i++){
        original.push(arr[i])
    }
    console.log(original);

    while(arr.length>0){
        temp.push(arr.pop());
    }
    for (let i = 0; i<original.length; i++){
        if (original[i] !== temp[i])
            return "not a palindrome";
    }
    return "palindrome";    
}
console.log(palindrome())


