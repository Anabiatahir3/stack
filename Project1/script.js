const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//function to show error
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;

}  
//function to show success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";}

//function to check if required  fields have data
function checkRequired (inputArray){
    inputArray.forEach(function(input){
        if (input.value===""){
            showError(input,`${input.id} is required`);
        }
        else{
            showSuccess(input);
        }
    });

}
//function to check length of input field
function checklength(input,min){
    if (input.value.length < min){
        showError(input,`${getFieldId(input)} needs to be atleast ${min} characters long`)
    }else{
        showSuccess(input);
    }
}

//function to check if password and confirm password match
function checkPasswordsMatch(input1, input2){
    if (input1.value!==input2.value){
        showError(input2,"passwords dont match");
    }
}
//function to validate email
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim() )){
        showSuccess(input);
    }else{
        showError(input,"please enter a valid email");
    }
    }





form.addEventListener("submit",function(e){
    e.preventDefault(); 
    checkRequired([username,email,password,password2]);
    checklength(username,3);
    checklength(password,6);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
    })
