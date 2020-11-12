

// login form validation

function validateLogin() {
    let email = document.getElementById('email-input').value,
        password = document.getElementById('password-input').value

if (email === '' || password === '') {
    alert('please enter your email and password');
} else {
    // submit form and login
    // alert('thank you, your message received');
}
}


// blog forms validation

// blog subscribe form

function subscribeForm() {
    let email = document.getElementById('email-form').value

    if (email === '') {
        alert('Please enter your email to subscribe')
    }
}


// blog post comment form validation

function commentForm() {
    let comment = document.getElementById('comment').value

    if (comment === '') {
        alert('please write your comment and submit')
    }
}


