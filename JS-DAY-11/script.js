// function handleClick(){
//     document.querySelector("#head").style.color="red";

//     document.getElementById("btn").textContent="color changed"
// }


// const handleClick = () => {
//     const image =document.createElement("img");
//     image.setAttribute("src", "https://www.admissionwala.in/storage/productimages/1643709127php61qcbJ.jpeg")

//     image.setAttribute("alt", "kr mangalam");

//     document.getElementById("content").append(image);
// }

document.getElementById("btn").addEventListener("click",()=>{
     const image =document.createElement("img");
    image.setAttribute("src", "https://www.admissionwala.in/storage/productimages/1643709127php61qcbJ.jpeg")

    image.setAttribute("alt", "kr mangalam");

    document.getElementById("content").append(image);

})