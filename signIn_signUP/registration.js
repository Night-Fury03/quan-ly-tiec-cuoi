var form = document.querySelector("#form-1")
form.onsubmit = function(e) {
    e.preventDefault();
}

var sign_upBtn = document.querySelector(".sign-up")
var sign_inBtn = document.querySelector(".sign-in")
var forgotPassword = document.querySelector(".forgot-password")
var heading = document.querySelector(".heading")
var password_confirmation = document.querySelector(".form-group.hidden")
var haveAccount = document.querySelector(".have-Account")

sign_upBtn.onclick = function(e) {
    sign_upBtn.classList.remove("background-white")
    sign_inBtn.classList.add("hidden")
    forgotPassword.classList.add("hidden")
    heading.innerHTML = "Đăng ký"
    password_confirmation.classList.remove("hidden")   
    haveAccount.classList.remove("hidden")
}

var sign_in = document.querySelector(".change-signin")
sign_in.onclick = function(e) {
    sign_upBtn.classList.add("background-white")
    sign_inBtn.classList.remove("hidden")
    forgotPassword.classList.remove("hidden")
    heading.innerHTML = "Đăng nhập"
    password_confirmation.classList.add("hidden")   
    haveAccount.classList.add("hidden")
}