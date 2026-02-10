// document.getElementById("myInput").addEventListener("change",()=>{
//     document.getElementById("output").textContent= "Change detected";
// });


const nameInput = document.getElementById("myInput");
const courseInput = document.getElementById("course");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

courseInput.addEventListener("change",()=>{
    console.log(courseInput.value);
    
    output.textContent = nameInput.value;
    output.textContent=courseInput.value
})

myform.addEventListener("submit",(event)=>{

    event.preventDefault();
    // console.log(event.target.value);

    const name = nameInput.value;
    const course = courseInput.value;
    console.log(name,course);

    output.textContent=name+" "+course;
})