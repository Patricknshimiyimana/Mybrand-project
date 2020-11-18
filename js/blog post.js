

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