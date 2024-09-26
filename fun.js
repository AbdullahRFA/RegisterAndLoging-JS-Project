let signupbtn=document.querySelector(".signupbtn");
let signinbtn=document.querySelector(".signinbtn");
let namefield=document.querySelector(".namefield");
let title=document.querySelector(".title");
let underline=document.querySelector(".underline");
let txt=document.querySelector(".txt");
let message=document.querySelector(".password")



signinbtn.addEventListener("click", ()=>{
    namefield.style.maxHeight='0';
    title.innerHTML="Sign In";
    txt.innerHTML="Forgote Password? ";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    underline.style.transform='translateX(35px)';

    
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let saveEmail=localStorage.getItem("email");
    let savePassword=localStorage.getItem("password");
    if(email==saveEmail && password==savePassword)
    {
        message.innerHTML = "Congratulations, you are signed in!";
        message.style.color = "green"; 
    }else
    {
        message.innerHTML = "Invalid email or password!";
        message.style.color = "red"; 
    }
   
});
signupbtn.addEventListener("click", ()=>{
    namefield.style.maxHeight='60px';
    title.innerHTML="Sign Up";
    txt.innerHTML="Password Suggestions ";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
    underline.style.transform='translateX(0px)';

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if(name && email && password){
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        message.innerHTML = "Account created successfully!";
        message.style.color="green";
    }else{
        message.innerHTML = "Please fill in all fields.";
        message.style.color = "red";
    }
    document.getElementById("name").value='';
    document.getElementById("email").value='';
    document.getElementById("password").value='';


    
});