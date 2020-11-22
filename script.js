const error_icon = document.querySelector(".error_icon");
const btn = document.querySelector(".btn");
let errorMessage = document.getElementById("valid_txt");
const inputBar =  document.getElementById("input_email");



function hideValidation(){
     error_icon.style.display = "none";
     errorMessage.style.display = "none";
}


function validation(){
    if(inputBar.value == ''){
        errorMessage.innerHTML = "Please fill out email address";
        errorMessage.style.display = "block";
        error_icon.style.display = "block";
        return false;
    }
    else{
        if(!validateEmail(inputBar.value)){
                errorMessage.innerHTML = "Please provide valid email"; 
            errorMessage.style.display = "block";
            error_icon.style.display = "block";  
            return false;
        }     
    }
}


function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
  }