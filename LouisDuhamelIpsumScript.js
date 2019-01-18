function displayBlocks(){

	var nbParagraphesVoulus = document.getElementById("input").value;
	var nbParagraphesAffiche = document.getElementsByClassName('paragraphe').length; 

    var paragraphes = document.querySelectorAll('.paragraphe');
	for (var i = 1; i < nbParagraphesAffiche; i++) {
	   paragraphes[i].classList.remove('show');
	}

	for (var i = 1; i < nbParagraphesVoulus; i++) {
	   paragraphes[i].classList.add('show');
	}
}






