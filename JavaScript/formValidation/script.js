function login(){
    const un=document.getElementById("userName").value.trim();
    const ps=document.getElementById("password").value;

    console.log(un,ps);
}

const loginForm =document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    console.log("formsubmmitted");

    const loginFormData=new FormData(loginForm);

    const UN=formData.get("userName");
    const PS=formData.get("password");

    console.log(UN,PS);

    console.log();

})