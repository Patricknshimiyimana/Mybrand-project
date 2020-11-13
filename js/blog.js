
const postWrap = document.querySelector(".wrap-posts");

// create element and render posts to the ui

function renderPost(doc) {
    let postDiv =  document.createElement('div');
    // let a = document.createElement('a');
    // let postImage = document.createElement('img');
    let postTitle = document.createElement('h2');
    let postBody = document.createElement('p');

    postDiv.setAttribute('data-id', doc.id);
    postTitle.textContent = doc.data().title;
    postBody.textContent = doc.data().body;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);

    postWrap.appendChild(postDiv);

}

// GRABBING DATA FROM THE DATABASE TO UI

db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPost(doc);
    })
})