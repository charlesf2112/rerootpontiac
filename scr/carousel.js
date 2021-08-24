var angle = 0;

function carouselSpin(direction){
	projects = document.querySelector(".projects");
	
	if(direction == 1){
		angle = angle - 40;
	}
	else{
		angle = angle + 40;
	}

	projects.setAttribute("style", "transform: rotateY("+ angle +"deg);");
}