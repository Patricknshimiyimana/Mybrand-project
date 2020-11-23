// user authentication

const auth = firebase.auth();

let loginBtn = document.querySelector(".login-btn");
let email = document.getElementById('email-input');
let password = document.getElementById('password-input');
let form = document.getElementById('login-form');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email.value, password.value).then(one => {
        form.reset();
        window.location.href = 'dashboard.html';
    }).catch(function(){
        loginError();
    })
})

function loginError() {
    let errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = 'Please enter a correct Email and Password';
    errorMsg.style.textAlign = 'center';
    errorMsg.style.boxSizing = 'border-box';
    // errorMsg.style.width = '100%';
    errorMsg.style.color = 'red';
    errorMsg.style.wordWrap = 'break';
}

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href = 'dashboard.html';
    } else {
        
    }
});
