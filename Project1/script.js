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


    function getCaption(input){
    const formControl = input.parentElement;
    const label = formControl.querySelector('label');
    return label.innerText;
}

function checkLength(input, minLen, maxLen){
    if(input.value.length < minLen || input.value.length > maxLen){
        showError(input,'Length of ' + getCaption(input) + ' Should be between'+ minLen +' & '+ maxLen + ' chars.');
    }

}
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords don't match.")
    } 
}
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value.trim()).toLowerCase());
}
function checkEmail(email){
    if(!isValidEmail(email)){
        showError(email, `Please provide valid Email.`)
    } else {
        showSuccess(email);
    } 

}
function checkRequired(inputArray){

    inputArray.forEach(input => {
        if(input.value === ''){
            showError(input,'Value for '+ getCaption(input) + ` is required.`)
        } else {
            showSuccess(input);
        }
    });
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkEmail(email);

    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    checkPasswordMatch(password, password2);

});
