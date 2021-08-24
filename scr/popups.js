// Get the modal
var contactPopup = document.getElementById("contactPopup");

var projectsPopup = document.getElementById("projectsPopup");

// Get the button that opens the modal
var contactLink = document.getElementById("contactLink");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
contactLink.onclick = function openContactPopup(){
  contactPopup.style.display = "block";
}

function openProjectsPopup(){
	projectsPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closePopup(){
  contactPopup.style.display = "none";
  projectsPopup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function closePopup(event){
  if (event.target == contactPopup || event.target == projectsPopup){
    contactPopup.style.display = "none";
	projectsPopup.style.display = "none";
  }
}