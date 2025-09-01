function createAccount(){
const newUserName=document.getElementById("newUserName").value 
const newUserPassword=document.getElementById("newUserPassword").value 
const createAccount=document.getElementById("createAccount")
const accountCreatedMessage=document.getElementById("accountCreatedSuccessfully")

if(!newUserName || !newUserPassword){
    accountCreatedMessage.style.color="red";
    accountCreatedMessage.textContent="Something went wrong, Please try Again"
    return;
}
localStorage.setItem("userName", newUserName);
localStorage.setItem("Password", newUserPassword);
accountCreatedMessage.style.color="green";
accountCreatedMessage.textContent="Account Created Succefully. Please Login"

}

function login(){
    const userName=document.getElementById("Username").value
    const password=document.getElementById("Password").value
    const login=document.getElementById("login")
    const logInMessage=document.getElementById("loginsuccess")
    const savedUserName=localStorage.getItem("userName");
    const savedUserPassword=localStorage.getItem("Password");
    if(userName===savedUserName && password===savedUserPassword){
        localStorage.setItem("loggedUser", userName);
        window.location.href="dashboard.html";
        // logInMessage.style.color="green"
        // logInMessage.textContent="Success......"
        
    }else if(userName!=savedUserName && password!=savedUserPassword){
        logInMessage.style.color="red"
        logInMessage.textContent="Invalid Username or Password"
        
    }else if (userName==="" || password===""){
        logInMessage.style.color="red"
        logInMessage.textContent="Please enter all the required fields"
    }
    
    // if(window.location.pathname.includes("dashboard.html")){
    //     const user=localStorage.getItem("loggedUser");
    //     if(!user){
    //         window.location.href="login.html";
    //     } else{
    //         document.getElementById("user").textContent=user
    //     }
    // }
    
    
}

function logout(){
    localStorage.removeItem("loggedUser");
    window.location.href="login.html";
}