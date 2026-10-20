const headingText=document.getElementById("heading");
const paratext=document.getElementById("studentMessage");
const btnlabel =document.getElementById("courseButton");

console.log(headingText.innerHTML);
console.log(paratext.innerText);
console.log(btnlabel.textContent);

headingText.innerText="vfsg";
headingText.innerText="ddfgg";
headingText.textContent="nnhnm";


function UpdateMYName(){

    const myName=document.getElementById("myName").value.trim();
    paratext.innerText=paratext.innerText+"!!"+myName;

}

const pic=document.getElementById("somePicture");

pic.src="";
pic.alt="";

function change(){
  const myNameInput =document.getElementById("myName");
   myNameInput.id="myFullName";
   myNameInput.type="password";
   myNameInput.name="FullName";

   pic.setAttribute("src","./wha");
   pic.setAttribute("alt","");


   headingText.style.color="red";
   headingText.style.backgroundcolor="blue";



}







// const body=document.querySelector("body");

// console.log(body);

// console.log(body.childNodes);
// console.log("innerText");
// console.log(body.innerText);



