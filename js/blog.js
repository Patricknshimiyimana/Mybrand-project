
const postWrap = document.querySelector(".wrap-posts");
const userComment = document.querySelector(".form");

// create element and render posts to the ui

function renderPost(doc) {
    let postDiv =  document.createElement('div');
    // let a = document.createElement('a');
    // let postImage = document.createElement('img');
    let postTitle = document.createElement('a');
    let postBody = document.createElement('p');
    let postImage = document.createElement('img');

    postDiv.setAttribute('data-id', doc.id);
    postDiv.setAttribute('class', 'post');
    postTitle.textContent = doc.data().title;
    postBody.textContent = doc.data().body;
    postImage.src = doc.data().image;

    postDiv.appendChild(postImage);
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);


    postWrap.appendChild(postDiv);

    // reading single post

    postTitle.addEventListener('click', (e) => {
        location.assign(`blog post.html#${doc.id}`);
    })

}

// GRABBING DATA FROM THE DATABASE TO UI

db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPost(doc);
    })
})

const auth = firebase.auth();
let loginBtn = document.getElementById('login-button');
let logoutBtn = document.getElementById('logout-button');

auth.onAuthStateChanged(user => {
    if (user) {
        logoutBtn.style.display = 'inline';
        loginBtn.style.display = 'none';
    } else {
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'inline';
    }
});

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})


// saving the data (comments) to the firestore

// userComment.addEventListener('click', (e) => {
//     // e.preventDefault();
//     console.log('helooo')
// })

// let commentContent = document.getElementById('comment-content');
//     commentButton = document.getElementById('comment-btn')

// //handle successful upload
// let today = new Date();
// let dateOfToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
//     db.collection('user-comments').add({
//         // image: downloadURL,
//         // title: postTitle.value,
//         content: commentContent.value,
//         date: dateOfToday
//     }).then(function(){
//         alert('Successfuly uploaded!');
        
//         window.location.href = "dashboard.html";
//     })
//     .catch(function(error) {
//         alert('Error uploading post, Try again!');
//     });
    
    
// });