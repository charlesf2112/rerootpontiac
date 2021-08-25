/*Home Page Slideshow Javascript*/

/*
The following ONLY applies to live uploads to the website server:

Must change title of this document in order to commit changes that are made 
within this javascript document AND you MUST also manually change the appropriate 
html href link title to the new javascript document title in all html documents that 
link to this javascript document. This link will be found at the bottom of <body> in 
each html document.

This will cause all browsers to load your new javascript changes instead of loading 
previous javascript code saved in clients' browser history (cache). 

The easiest way to update the javascript title is to update the current version of the javascript file. 
Ex: title change from "slideshow-version2" to "slideshow-version3" 
*/

const carouselSlide = document.querySelector('.slideshow');
const carouselImages = document.querySelectorAll('.slideshow img');
const dots = document.querySelectorAll('.dot');

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

startTimer();

function startTimer() {
	timer = setTimeout(function() {	clearTimeout(timer);startTimer();plusSlides();}, 5000); 
};

function plusSlides() {
	//check if next image exists else return to first image
	if (counter > carouselImages.length - 2) {
		counter = -1;
	}
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter += 1;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	clearTimeout(timer);
	startTimer();
}
function prevSlides() {
	//check if previous image exists else go to last image
	if (counter < 1) {
		counter = carouselImages.length;
	}

	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter -= 1;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	clearTimeout(timer);
	startTimer();
}
function currentSlide(n){
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	tcounter = n - 1;

	//move forward or backward depending on where selected index is relative to current image index
	if (tcounter > counter) {
		counter = tcounter
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (tcounter < counter){
		counter = tcounter
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	clearTimeout(timer);
	startTimer();
	
}