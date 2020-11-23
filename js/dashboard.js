// sidebar nav-icon

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

// function closeSidebar() {
//     if (sidebarOpen) {
//         sidebar.classList.remove("sidebar-responsive");
//         sidebarOpen = false;
//     }
// }

// logout button

const auth = firebase.auth();
let logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})

auth.onAuthStateChanged(user => {
    if (user) {
        
    } else {
        window.location.href = 'login.html';
    }
});
