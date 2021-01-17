var slideNo = 1;
createDots();
showSlides();

function createDots(){
  var images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++) {
    document.getElementById("DotsWrapper").innerHTML += `<span class="dot" onclick="showSlides(${i+1})"></span>`
  }
}

function previousSlide() {
  slideNo--
  showSlides();
}

function nextSlide() {
  slideNo++
  showSlides();
}

function SlideshowTrue(){
  if (!document.getElementById("annimation").checked){
    document.getElementById("annimation").checked = true;
    showSlides();
  }
}

function SlideshowFalse(){
  if (document.getElementById("annimation").checked){
    document.getElementById("annimation").checked = false;
    showSlides();
  }
}

function manageSlideNo(){
    if (slideNo > document.getElementsByClassName("image").length) {
      slideNo = 1
    }    
    if (slideNo < 1) {
      slideNo = document.getElementsByClassName("image").length
    }
}

function showSlides(n = slideNo) {
  try{
    clearTimeout(timeout)
  }
  catch(err){

  }
  console.log(slideNo)
  slideNo = n
  var images = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  manageSlideNo()
  for (i in dots) {
      try {
        images[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
      }
      catch(err) {
      }
  }
  images[slideNo-1].style = "display: block; max-width: 100%"
  dots[slideNo-1].className += " active";
  try{
      if (document.getElementById("annimation").checked){
      slideshow = function(){nextSlide()}
      timeout = setTimeout(slideshow, 3500);
      }
    }
  catch(err){}
}
