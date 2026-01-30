const heading = document.getElementById("myHeading");
console.log(heading);

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
console.log(heading.textContent);
heading.textContent="hello india";

const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);

for(let i=0;i<subHeading.length;i++){
    subHeading[1].style.color="pink";
}