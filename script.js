/*---- NAV ----*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/*---- SLIDESHOW ----*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/*---- TIMER -----*/
// postaviti datum
var countDownDate = new Date("May 12, 2023 18:00:00").getTime();

// azuriraj timer svaku sekundu
var x = setInterval(function() {

// azuriraj danasnje vrijeme i datum
var now = new Date().getTime();

// razlika između sada i krajnjeg termina
var distance = countDownDate - now;

// racunanje vremena
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// prikaz odbrojavanja u elementu sa id="demo"
document.getElementById("timer-js").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// odbrojavanje zavrseno
if (distance < 0) {
	clearInterval(x);
	document.getElementById("timer-js").innerHTML = "TEHNOLOGIJADA JE POČELA";
}
}, 1000);