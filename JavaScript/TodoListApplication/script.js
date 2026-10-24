function  addTask() {

    const newTask=document.getElementById("taskInput").Value.trim();

    const LI=document.createElement("li");
    LI.classList.add("p-3");

     const SPAN=document.createElement("span");
    SPAN.textContent=newTask;

    const BUTTON=document.createElement("button");
    BUTTON.classList.add("btn","btn-danger","btn-sm","ms-3");
    BUTTON.textContent="Delete";
    BUTTON.onclick=()=>LI.remove();

    LI.appendChild(SPAN);
    LI.appendChild(BUTTON);

    document.getElementById("taskInput").appendChild(LI);

     document.getElementById("taskInput").Value=" ";
    



}
