const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let users = ["admin"];
let passwords = ["admin"];

function loginUser() {

    console.log(users);
    console.log(passwords)

    let username = document.getElementById("logUsername").value;
    let password = document.getElementById("logPassword").value;

    let found = false;

    for (let i = 0; i < users.length; i++) {
        for(let j = 0; j < passwords.length; j++){
            if (username === users[i] && password === passwords[j]) {
                found = true;
                break;
            }
        }
    }

    if (found) {
        window.location.href = "../home.html";
    } else {
        alert("Invalid Credentials");
        document.getElementById("logUsername").value = "";
        document.getElementById("logPassword").value = "";
    }
}

function signupUser() {
    let newUsername = document.getElementById("signUsername").value;
    let newPassword = document.getElementById("signPassword").value;

    if(users.includes(newUsername)){
        alert("Username already exists. Please choose another one");
    }
    else if(passwords.includes(newPassword)){
        alert("Password already exists. Please choose another one");
    }
    else{
        users.push(newUsername);
        passwords.push(newPassword);
        alert("Registered");
        document.getElementById("signUsername").value = "";
        document.getElementById("signPassword").value = "";
    }
}