// const query =  document.querySelector
// ("#content p");
// console.log(query);

// query.textContent ="hyy wish you a happy new year "


// querySelectorAll
// const query =  document.querySelector("#content p");
// console.log(query, "query");
// query.textContent = "jidhgj vbnm gyujm"

// const query2 = document.querySelectorAll("p");
// console.log(query2,"query");

// for(let i=0;i<query2.length;i++){
//     query2[i].textContent ="sdfg fghj gyui"
// }

const para = document.getElementsByTagName("p");

for(let i=0;i<para.length;i++){
    // para[i].textContent ="hello good morning";
    if(i%2 === 0){
        para[i].style.color = "blue"
    }
    else{
        para[i].style.color="green"
    }
}
para[para.length-1].style.fontWeight="bold"