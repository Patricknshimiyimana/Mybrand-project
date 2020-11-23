// displaying messages from firestore

const messagesList = document.querySelector(".wrap-messages");

//create element and render messages

function renderMessages(doc) {
    let msgDiv = document.createElement('div');
    let senderName = document.createElement('h3'); 
    let senderEmail = document.createElement('p');
    let msgHead = document.createElement('div');
    let senderMsg = document.createElement('p');

    msgDiv.setAttribute('data-id', doc.id);
    msgDiv.setAttribute('class', 'message' );
    senderName.textContent = doc.data().name;
    senderEmail.textContent = doc.data().email;
    senderMsg.textContent = doc.data().message;

    msgHead.appendChild(senderName);
    msgHead.appendChild(senderEmail);
    msgDiv.appendChild(msgHead);
    msgDiv.appendChild(senderMsg);

    messagesList.appendChild(msgDiv);

    msgHead.style.display = 'grid';
    msgHead.style.gridTemplateColumns = '50% 50%';
    

}

db.collection('user-messages').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderMessages(doc);
    })
})