const H=document.createElement("h2");
const P=document.createElement("p");
const B=document.createElement("button");

H.classList.add("text-info");
H.textContent="Sub Heading";

P.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernaturnisi ut unde possimus repudiandae harum maiores porro magni eum maxime  soluta, atque, dicta nam asperiores. Sed sequi in tenetur tempora."


B.classList.add("btn","btn-primary");
B.innerText="Submit";


 const div=document.getElementById("task1");
 div.appendChild(H);
 div.appendChild(P);
 div.appendChild(B);

 H.append("Welcome");
 console.log(H.innerText);
 H.remove;