

let userName = document.getElementById('name'),
    userEmail = document.getElementById('email'),
    userMessage = document.getElementById('message'),
    validMsg = document.getElementById('validation-msg'),
    sendBtn = document.getElementById('send');

// saving the messages to firestore

sendBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    alert('Message sent');

    db.collection('user-messages').add({
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value
    });

    userName.value = '';
    userEmail.value = '';
    userMessage.value = ''

})

