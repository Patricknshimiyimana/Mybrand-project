const navSlide = () => {
const bread = document.querySelector('.bread');
const nav = document.querySelector('.navbar-list');

bread.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});
}

navSlide();