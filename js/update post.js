
let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
// let image = document.getElementById("post-image").files[0];
let button = document.querySelector(".post-btn");


    function updatePost(){
        //get image
        const image = document.querySelector('#post-image').files[0];
        const imageName = image.name;
        //ref to root storage + image storage
        var storageRef = firebase.storage().ref('assets/'+imageName);
        //upload image to selected starage
        const uploadTask = storageRef.put(image);
        //get upload progress
        uploadTask.on('state_changed', function(snapshot){
            //get progress
            const progress = snapshot.bytestransferred/snapshot.totalBytes *100;
            console.log("Upload is " +progress+ " done");
        }, function(error){
            //handle errors
            console.log(error.message);
        }, function(){
            //handle successful upload
            
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                db.collection('posts').doc(id).update({
                    image: downloadURL,
                    title: postTitle.value,
                    body: postBody.value
                    
                }).then(function(){
                    alert('Successfuly updated!');
                    
                    window.location.href = "dashboard.html";
                })
                .catch(function(error) {
                    alert('Error updating post, Try again!');
                });
                
                
            });
        });
          
    };





button.addEventListener('click', (e)=>{
e.preventDefault();

    updatePost();
} )

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
        
    } else {
        window.location.href = 'login.html';
    }
});


// fetching and dispalying data to the forms to edit
let id = location.hash.slice(1);

db.collection('posts').doc(id).get().then(function(doc){
    displayData(doc);
});

function displayData(doc){
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postImage = document.getElementById('img-element');

    postTitle.textContent = doc.data().title;
    postBody.textContent = doc.data().body;
    postImage.src = doc.data().image;

}


