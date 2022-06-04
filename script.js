//menu hider
const menu = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-nav');
});