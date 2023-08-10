const name_input = document.getElementById("form-name");
const email_input = document.getElementById("form-email");
const text_area = document.getElementById("form-message");
const submit_btn = document.getElementById("form-submit-btn");

const name_input_err = document.getElementById("form-name-err");
const email_input_err = document.getElementById("form-email-err");

let name_error = true;
let email_error = true;
let message_error = true;

const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const name_pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\- ]+$/;

function checkPattern(value, pattern){
    return pattern.test(value);
}

name_input.addEventListener("input", function(event){
    let input_value = event.target.value;

    if(checkPattern(input_value, name_pattern)){
        name_error = false;
        if(!name_input_err.classList.contains("hidden")){
            name_input_err.classList.add("hidden");
        }
    } else {
        name_error = true;
        if(name_input_err.classList.contains("hidden")){
            name_input_err.classList.remove("hidden");
        } 
    }
    checkValidation();
});

email_input.addEventListener("input", function(event){
    let input_value = event.target.value;

    if(checkPattern(input_value, email_pattern)){
        email_error = false;
        if(!email_input_err.classList.contains("hidden")){
            email_input_err.classList.add("hidden");
        }
    } else {
        email_error = true;
        if(email_input_err.classList.contains("hidden")){
            email_input_err.classList.remove("hidden");
        }
    }
    checkValidation();
});

text_area.addEventListener("input", function(event){
    let input_value = event.target.value;

    if(input_value == "") message_error = true;
    else message_error = false;
    checkValidation();
});

function checkValidation(){
    if(!name_error && !email_error && !message_error)
        submit_btn.disabled = false;
    else submit_btn.disabled = true;

}