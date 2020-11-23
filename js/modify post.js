

const postWrap = document.querySelector(".charts");
const userComment = document.querySelector(".form");

// create element and render posts to the ui

function renderPost(doc) {
    let postDiv =  document.createElement('div');
    let modifyBtns = document.createElement('div');
    let editbtn = document.createElement('button');
    let deletebtn = document.createElement('button');

    editbtn.innerHTML = 'edit';
    deletebtn.innerHTML = 'delete';

    let postTitle = document.createElement('a');
    let postBody = document.createElement('p');
    let postImage = document.createElement('img');

    
    postDiv.setAttribute('data-id', doc.id);
    postDiv.setAttribute('class', 'charts-left');
    postDiv.setAttribute('class', 'post');
    modifyBtns.setAttribute('class', 'post-edit');
    postTitle.textContent = doc.data().title;
    postBody.textContent = doc.data().body;
    postImage.src = doc.data().image;

    
    postDiv.appendChild(postImage);
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);

    modifyBtns.appendChild(editbtn);
    modifyBtns.appendChild(deletebtn);
    postDiv.appendChild(modifyBtns);

    modifyBtns.style.display = 'grid';
    modifyBtns.style.gridTemplateColumns = '45% 45%';
    modifyBtns.style.gridGap = '5%';
    modifyBtns.style.justifyContent = 'center';
    editbtn.style.padding = '10px';
    deletebtn.style.padding = '10px';

    editbtn.style.border = 'none';
    deletebtn.style.border = 'none'
    editbtn.style.color = 'white';
    deletebtn.style.color = 'white';
    deletebtn.style.borderRadius = '10px'
    editbtn.style.borderRadius = '10px'
    editbtn.style.backgroundColor = 'orange';
    deletebtn.style.backgroundColor = 'red';



    postWrap.appendChild(postDiv);

    // reading single post

    deletebtn.addEventListener('click', (e) => {
        if (confirm ('Are you sure you want to delete this post?') == true ) {
            db.collection('posts').doc(doc.id).delete().then(function(){
                alert('post successfully deleted');
            });
        } else {
            alert('post deleted');
        }
    })

    editbtn.addEventListener('click', (e) => {
        e.preventDefault();

        location.assign(`Edit post.html#${doc.id}`);
    })

}

// GRABBING DATA FROM THE DATABASE TO UI

db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPost(doc);
    })
})