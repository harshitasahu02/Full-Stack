const showassBtn=document.getElementById("showassingmentnotification ");
const showattBtn=document.getElementById("showattendencenotification ");
const stopassBtn=document.getElementById(" StopAssingmentNotification");

const asspara=document.getElementById("AssingmentNotification ");
const  attpara=document.getElementById("AttendenceNotification");

function showAssingment(){
    
 asspara.textContent=" your assingment deadline is approacing! ";
}


showassBtn.addEventListener("click",showAssingment );
showattBtn.addEventListener("click",() => {

     attpara.textContent="please check your attendence status!";

});


stopassBtn.addEventListener("click",() => {
showassBtn.removeEventListener("click",showAssingment);

 asspara.textContent="Your assignment Notification is Stopped!  ";


});


const parent=document.getElementById("outer");
const child=document.getElementById("inner");


parent.addEventListener("clcik",()=>{

     console.log("parents Clicked");


});

child.addEventListener("clcik",() => {

     console.log("child Clicked");
     

})

const strip=document.getElementById("EventCspturing");

function view(){

    console.log("view Button Clicked ");
}

strip.addEventListener("clcik",view);

document.getElementById("view").addEventListener("clcik",view);

const parentcard =document.getElementById("EventsDelegation");

parentcard.addEventListener("click",(e) => {

    if( e.target.tagname ==="DIV" )
   {
    
     console.log(e.target.textContent)

   }


});



