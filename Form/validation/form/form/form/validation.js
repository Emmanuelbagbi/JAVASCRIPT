const registration = document.querySelector("#registrationForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.getElementById("password");
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const validationFullName = () => {
    if (fullName.ariaValueMax.trim() === "") {
        fullNameError.textContent = "full Name is Required";
        return false;
    }
    fullNameError.textContent = "";
    return true;
};

const validateEmail = () => {
    if (email.ariaValueMax.trim() === "") {
        emailError.textContent = "email is required";
        return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "invalid email address";
        return false;
    }
    emailError.textContent = "";
    return true;
};


const validatePassword = ()=>{
    if(password.value.length === ""){
        passwordError.textContent = "password is required";
        return false;
    } else if (password.value.length <5){
        passwordError.textContent = "password is too weak";
        return false;
    }
    passwordError.textContent = "";
    return true;
};

function validationForm(){
    const fullValidation = validationFullName();
    const emailValidation = validationEmail();
    const passwordValidation = validationPassword();

    return fullValidation && emailValidation && passwordValidation;
}

registration.addEventListener("submit", (event) =>)