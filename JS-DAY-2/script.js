// map method
let arr = [1,2,3,4,5]

let result = arr.map((x)=>x)
console.log(result);

// filter method
let scores = [12,22,14,15,32,20,6,17];
let highscore =
scores.filter((score) =>{
    if(score>=15){
        console.log(score,"pass")
    }
    else{
        console.log(score,"fail")
    }
});

// reduce method
let numbers = [1,2,3,4,5];
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum = sum+numbers[i]
}
