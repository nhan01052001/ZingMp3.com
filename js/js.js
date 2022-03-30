var slideIndex = 0;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image-of-song");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

// function countScroll() {
//   $('.nav-header').style.backgroundColor = "rgb(23 15 35)";
//     console.log(document.documentElement.scrollTop)
// }

const count_scroll = document.getElementsByClassName('.content-main');

count_scroll.onscroll = function() {
  // $('.nav-header').style.backgroundColor = "rgb(23 15 35)";
  console.log(window.scrollY)
}

const slider = document.getElementById("myProgress")
const min = slider.min
const max = slider.max
const value = slider.value

//  --pink: #ff74a4;
//violet: #9f6ea3;
slider.style.background = `linear-gradient(to right, #ff74a4 0%, #9f6ea3 ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #ff74a4 0%, #9f6ea3 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};