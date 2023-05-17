let usernameInput = document.getElementById("usernameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");
let nameAlert = document.getElementById("nameAlert")
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let accountExistMsg = document.getElementById("accountExistMsg");

var userList;
if (localStorage.getItem("UsersData") == null) {
    userList = [];
}
else {
    userList = JSON.parse(localStorage.getItem("UsersData"));
}

function signUp() {
    UserNameCheck();
    UserEmailCheck();
    UserPasswordCheck();

    if (UserNameCheck && UserEmailCheck && UserPasswordCheck && ISExist!=true) {
        var myUser = {
            userName: usernameInput.value,
            userEmail: userEmailInput.value,
            userPassword: userPasswordInput.value
        };
        alert()
        userList.push(myUser);
        localStorage.setItem("UsersData", JSON.stringify(userList));
        let SuccessMessage = document.getElementById("SuccessMessage");
        SuccessMessage.classList.replace("d-none", "d-block");
        let signin = document.getElementById("signin");
        signin.classList.replace("d-none", "d-block");
    }
    else {
        let signUpfailed = document.getElementById("signUp-failed");
        signUpfailed.classList.replace("d-none", "d-block");
    }
}





function UserNameCheck() {
    let regex = /^([a-zA-Z]{4,10})/;
    if (regex.test(usernameInput.value) == true && usernameInput.value != null) {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        nameAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        nameAlert.classList.replace("d-none", "d-block");
        return false;
    }
}




function UserEmailCheck() {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(userEmailInput.value) == true && userEmailInput.value != null) {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        emailAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        emailAlert.classList.replace("d-none", "d-block");
        return false;
    }
}





function UserPasswordCheck() {
    let regex = /^[A-Za-z0-9]{3,15}$/;
    if (regex.test(userPasswordInput.value) == true && userPasswordInput.value != null) {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        // passwordAlert.replace("d-none", "d-block");
        return true;
    }
    else {
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        // passwordAlert.replace("d-block", "d-none");
        return false;
    }
}
function ISExist() {

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userEmail.toLowerCase() == userEmailInput.value.toLowerCase()) {
            accountExistMsg.replace("d-none", "d-block");
            userEmailInput.classList.add("is-invalid");
            userEmailInput.classList.remove("is-valid");
            return true;
        }
        else {
            return false;
        }
    }

}

function login() {
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");
    let fillMsg = document.getElementById("fillMsg");


    for (let i = 0; i < userList.length; i++) {

        if (userList[i].userEmail.toLowerCase() == loginEmail.value.toLowerCase() && userList[i].userPassword.toLowerCase() == loginPassword.value.toLowerCase()) {

            localStorage.setItem("WelcomeForNewUser", userList[i].userName);
            loginBtn.setAttribute("href", "welcome.html");

        }

        else {

            wrongMsg.classList.replace("d-none", "d-block");
        }
    }

    if (loginEmail.value == null || loginPassword.value == null) {
        fillMsg.classList.replace("d-none", "d-block");
    }
}

let WelcomeNamefromlocalstorage = localStorage.getItem("WelcomeForNewUser");


function displayWelcomeUser(){

var WelcomeUserName = document.getElementById("username");
WelcomeUserName.innerHTML = "Welcome "+ WelcomeNamefromlocalstorage;
}

function logout(){
    localStorage.removeItem("WelcomeForNewUser");
}