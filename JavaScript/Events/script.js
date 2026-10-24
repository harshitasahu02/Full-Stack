function ShowAlert() {

    alert("click me button clicked using HTML Events");

}


document.getElementById("clickButton").addEventListener("click",ShowAlert2);

function ShowAlert2()
{
    alert("click me2 button clicked using js Events"); 

}

document.getElementById("box").addEventListener("click", ()=> {

    document.getElementById("box").innerText="the Box Was Clicked";
});

document.getElementById("para1").addEventListener("mouseover", ()=> {

    document.getElementById("para1").innerText="Pointer is over the paragraph!";
});
document.getElementById("para1").addEventListener("mouseout", ()=> {

    document.getElementById("para1").innerText=" Move your pointer here.";
});
document.getElementById("box2").addEventListener("click", ()=> {

    document.getElementById("box2").innerText="Box clicked!";
});
document.getElementById("para2").addEventListener("mousedown", ()=> {

    document.getElementById("para2").innerText="Mouse button pressed!";
});
document.getElementById("para2").addEventListener("mouseup", ()=> {

    document.getElementById("para2").innerText="Mouse button released !";
});
document.getElementById("para3").addEventListener("dblclick", ()=> {

    document.getElementById("para3").innerText=" !";
});
document.getElementById("para4").addEventListener("mousemove", ()=> {

    document.getElementById("para4").innerText=" cz";
});


document.getElementById("nameSubmit").addEventListener("click",() =>{

    console.log(document.getElementById("fullName").value.trim());

})

document.getElementById("fullName").addEventListener("keydown",(e) =>{

   ( e.key==="Enter")&&console.log(document.getElementById("fullName").value.trim());

})

function login(e)
{
    e.preventDefault();
    console.log("login Done");



}