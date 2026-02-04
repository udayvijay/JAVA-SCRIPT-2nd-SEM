// const head=document.getElementById("heading");
// // Headers.innerHTML="<i>New heading</i>"
// console.log(head.innerText) //it will show only the visible text 
// console.log(head.textContent)//it will show all the text includeing hiddden text
// console.log(head.innerHTML)//it will show all the text with its tag/element


//DOM Modification
//Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph.textContent);


//Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

//document.querySelector("#container p")

// const con = document.getElementById("container");
// const para = con.querySelector("#container p")

//remove element
document.querySelector("#container p").remove();

let date = new Date()
console.log(date);

setTimeout(()=>{
    console.log("welcome");
    //alert("offer valid till 12 pm")
})

setInterval(()=>{
    let date = new Date()
    console.log(date);
},1000)

//event handle
function handelClick(){
    document.getElementById("output").textContent = "Button clicked!";
}