

let id = location.hash.slice(1);

db.collection('posts').doc(id).get().then(doc => {
    singlePost(doc.data());
})

function singlePost(doc) {
    let singlePostImg = document.getElementById('single-post-img');
    let singlePostDate = document.getElementById('single-post-date');
    let singlePostTitle = document.getElementById('single-post-title');
    let singlePostBody = document.getElementById('single-post-p');

    singlePostImg.src = doc.image;
    singlePostDate.textContent = doc.date;
    singlePostTitle.textContent = doc.title;
    singlePostBody.textContent = doc.body;
}

// getting user commemts

let commenterName = document.getElementById('commentername');
let commentBody = document.getElementById('comment-content');
let commentBtn = document.getElementById('comment-btn');
let form = document.querySelector('.form');

// If (commenterName.value === '' ) {
//     alert('Your name is required');
//     return false;
// };

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('user-comments').add({
        postId: id,
        commenterName: commenterName.value,
        commentBody: commentBody.value
        
    });
    alert('Your comment uploaded');
    form.reset();
})

db.collection('user-comments').where('postId', '==', id).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();

    changes.forEach(change => {
        if (change.type == 'added') {
            dispayComment(change.doc);
        }
    })
})

function dispayComment(doc) {
    let commentsWrapper = document.getElementById('comments-wrapper');
    let commentDiv = document.createElement('div');
    let commentHead = document.createElement('div');
    let commentName = document.createElement('p');
    let commentTime = document.createElement('p');
    let commentContent = document.createElement('p');


    commentName.textContent = doc.data().commenterName;
    commentTime.textContent = 'a few seconds ago';
    commentContent.textContent = doc.data().commentBody;

    commentHead.appendChild(commentName);
    commentHead.appendChild(commentTime);

    commentDiv.appendChild(commentHead);
    commentDiv.appendChild(commentContent);

    commentsWrapper.appendChild(commentDiv);

    commentHead.setAttribute('class', 'comment-head');
    commentContent.setAttribute('class', 'comment-body');
    commentName.setAttribute('class', 'commenter-name');
    commentTime.setAttribute('class', 'comment-time');

    commentDiv.style.border = '1px solid grey';
    commentDiv.style.borderRadius = '25px';
    commentDiv.style.padding = '15px';
    commentDiv.style.margin = '10px';

}



