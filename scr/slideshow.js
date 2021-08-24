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

var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slide"); /*array of slides*/
	var dots = document.getElementsByClassName("dot"); /*array of dots*/
	
	/*checks for looping slides*/
	if (slideIndex > slides.length){slideIndex = 1}
	if (slideIndex < 1) {slideIndex = slides.length}
	
	
	/*hide all slides then show relevant slide*/
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	if (slideIndex > slides.length) {slideIndex = 1;}
	slides[slideIndex-1].style.display = "flex";
	
	/*make all dots transparent then make relevant dot white*/
	for (i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = "rgba(218, 218, 218, 0.85)";
	}
	dots[slideIndex - 1].style.backgroundColor = "white";
	

	timer = setTimeout(function() {slideIndex++; showSlides();}, 5000); =======

/*called when clicking arrows*/
function plusSlides(n) {
	clearTimeout(timer)
	slideIndex += n
	showSlides();
}

/*called when clicking dots*/
function currentSlide(n) {
	clearTimeout(timer);
	slideIndex = n
	showSlides();
}

