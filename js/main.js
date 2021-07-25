let time = 0,
	currentImage = 0,
	images = document
			.querySelectorAll("#teste")
	max = images.length;

function nextImage() {
	
	/*
	images[currentImage].classList.remove("selected");

	currentImage++;

	if(currentImage >= max) {
		currentImage = 0;
	}

	images[currentImage].classList.add("selected");
	*/
	// console.log(images);
}

function start() {
	setInterval(() => {
		nextImage();
	}, time);
}

window.addEventListener("load", start);

$(document).ready( function() {

	$("#botao-dropdown").click( () => {
		$("#dropdown-menu").slideToggle();
		document.getElementById("dropdown-menu").style.display = "flex";
	} );

} );