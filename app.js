
const db = {
    anna:{username:"anna",password:123},
    jack:{username:"jack",password:123},
}

window.onload = console.log(db);

function login() {
    const username = document.querySelector('#uname');
    const password = document.querySelector('#pswd');


    if( username.value in db) {
        if( password.value == db[username.value].password) {
            alert("success");
            window.location.href = "/home.html"
        } else {
            alert("incorrect password");
        }
    } else {
        alert("incorrect username");
    }
}


function register() {
    const uname = document.querySelector('#uname');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const createPswd = document.querySelector('#createPswd');
    const verifyPswd = document.querySelector('#verifyPswd');


    if (uname.value != "" && email.value != "" && phone.value != "" && createPswd.value != "" && verifyPswd.value != "") {
        if(!(uname.value in db)) {
            alert("registered")
            window.location.href = "/index.html"
        } else {
            alert("user already exist please login")
        }

    }  else {
        alert("enter a valid input")
    }
}
