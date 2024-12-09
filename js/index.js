const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const btnRegister = document.getElementById("signUp");
const btnLogin = document.getElementById("btnLogin");
let UserList = [];

if (localStorage.getItem("UserList") !== null) {
  UserList = JSON.parse(localStorage.getItem("UserList"));
}

function addNewUSer() {
  if (validationName() && validationEmail() && validationPassWord()) {
    let newUser = {
      Name: signupName.value,
      Email: signupEmail.value,
      passWord: signupPassword.value,
    };
    UserList.push(newUser);
    localStorage.setItem("UserList", JSON.stringify(UserList));
    clearinput();
  }
}
function Login() {
  if (validationName() && validationEmail() && validationPassWord()) {
    let email = loginEmail.value;
    let password = loginPassword.value;
    for (var i = 0; i < UserList.length; i++) {
      if (
        UserList[i].email.toLowerCase().includes(email.toLowerCase()) &&
        UserList[i].passWord.includes(password)
      ) {
        console.log("ok");
      }
    }
  }
}

function clearinput() {
  signupName.value = null;
  signupEmail.value = null;
  signupPassword.value = null;
  signupName.classList.remove("is-valid");
  signupEmail.classList.remove("is-valid");
  signupPassword.classList.remove("is-valid");
}

function validationName() {
  let regex = /\b\w{4,}\b/;
  let text = signupName.value;
  let msgName = document.getElementById("msgsignupName");

  if (regex.test(text)) {
    // Valid input
    signupName.classList.add("is-valid");
    signupName.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    // Invalid input
    signupName.classList.add("is-invalid");
    signupName.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}

function validationEmail() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let text = signupEmail.value;
  let msgName = document.getElementById("msgsignupEmail");

  if (regex.test(text)) {
    // Valid input
    signupEmail.classList.add("is-valid");
    signupEmail.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    // Invalid input
    signupEmail.classList.add("is-invalid");
    signupEmail.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}

function validationPassWord() {
  let regex = /^[a-zA-Z0-9\s_-]+$/;
  let text = signupPassword.value;
  let msgName = document.getElementById("msgsignupPassword");

  if (regex.test(text)) {
    // Valid input
    signupPassword.classList.add("is-valid");
    signupPassword.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    // Invalid input
    signupPassword.classList.add("is-invalid");
    signupPassword.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}
btnRegister.addEventListener("click", function () {
  addNewUSer();
});
