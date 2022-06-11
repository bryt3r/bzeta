//menu hider
const menu = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-nav');
});


function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("imageSlide");
    let thumbs = document.getElementsByClassName("imageThumb");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < thumbs.length; i++) {
      thumbs[i].className = thumbs[i].className.replace(" activeThumb", "");
    }
    slides[n-1].style.display = "block";
    thumbs[n-1].className += " activeThumb";
  }