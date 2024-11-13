function validateEmail(){
    //implement this function
    const email = document.getElementById("email").value
    console.log(email)
}
function validatepassword(){
    //implement this function
    const password = document.getElementById("password").value
    console.log(password)
}





function validateEmail(){
    const email = document.getElementById("email").value
    console.log(email)
}

function validatepassword(){
    const password = document.getElementById("password").value
    const registerbutton=document.getElementById("registeration")

     if(password.length==10||password.length>10){
        registerbutton.removeAttribute("disabled")
        document.getElementById("length").checked=true
     }

     
}