
let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
// let image = document.getElementById("post-image").files[0];
let button = document.querySelector(".post-btn");


    function uploadImage(){
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
            let today = new Date();
            let dateOfToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                db.collection('posts').add({
                    image: downloadURL,
                    title: postTitle.value,
                    body: postBody.value,
                    date: dateOfToday
                }).then(function(){
                    alert('Successfuly uploaded!');
                    
                    window.location.href = "dashboard.html";
                })
                .catch(function(error) {
                    alert('Error uploading post, Try again!');
                });
                
                
            });
        });
          
    };





button.addEventListener('click', (e)=>{
e.preventDefault();

    uploadImage();
} )

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
        
    } else {
        window.location.href = 'login.html';
    }
});


