const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const btnLogin = document.getElementById("btnLogin");
let UserList = [];

if (localStorage.getItem("UserList") !== null) {
  UserList = JSON.parse(localStorage.getItem("UserList"));
}

function Login() {
  if (validationEmail() && validationPassWord()) {
    var result = UserList.find(
      (user) =>
        user.Email === loginEmail.value && user.passWord === loginPassword.value
    );

    if (result !== undefined) {
      window.alert("User Is OK");
      clearinput();
    } else {
      window.alert(undefined);
    }
    
  }
}

function clearinput() {
  loginEmail.value = null;
  loginPassword.value = null;
  loginPassword.classList.remove("is-valid");
  loginEmail.classList.remove("is-valid");
}

function validationEmail() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let text = loginEmail.value;
  let msgName = document.getElementById("msgLoginEmail");

  if (regex.test(text)) {
    // Valid input
    loginEmail.classList.add("is-valid");
    loginEmail.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    // Invalid input
    loginEmail.classList.add("is-invalid");
    loginEmail.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}

function validationPassWord() {
  let regex = /^[a-zA-Z0-9\s_-]+$/;
  let text = loginPassword.value;
  let msgName = document.getElementById("msgLoginPassword");

  if (regex.test(text)) {
    // Valid input
    loginPassword.classList.add("is-valid");
    loginPassword.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    // Invalid input
    loginPassword.classList.add("is-invalid");
    loginPassword.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}

btnLogin.addEventListener("click", function () {
  Login();
});
