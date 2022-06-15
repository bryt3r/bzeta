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
  slides[n - 1].style.display = "block";
  thumbs[n - 1].className += " activeThumb";
}



function flipCard() {
  let i;
  let boxes = document.querySelectorAll(".package-box");
  let cards = document.querySelectorAll(".package-card");

  boxes.forEach((box, i) => {
    var degrees = 0;
    box.addEventListener('click', function () {
      if (degrees > 180) {
        degrees = 0;
      }
      degrees += 180;
      cards[i].style.transform = "rotateY(" + degrees + "deg)";
      cards[i].style.webkitTransform = "rotateY(" + degrees + "deg)";
      cards[i].style.MozTransform = "rotateY(" + degrees + "deg)";
      cards[i].style.msTransform = "rotateY(" + degrees + "deg)";
      cards[i].style.OTransform = "rotateY(" + degrees + "deg)";
      cards[i].style.transform = "rotateY(" + degrees + "deg)";
      console.log(`${degrees} -- ${i}`);
    });
  });


}

window.onload = flipCard;