tabIspum = [
  	"I recently experienced some trouble with VLC and heavy mp4 files; although “normal” HD files would play fine, VLC would not play ball with my GPU when playing some heavy 1080p mp4 files. Here’s how I fixed it on my Samsung Ativ Book 9 Lite.",
  	"I am using Elementary OS Luna and the ATI Radeon driver from Jockey (the post-release update from the “Additional Drivers”). The FOSS driver for my GPU (ATI Radeon HD 8250) does not work well for now, so I use the proprietary driver until the FOSS driver is fixed.",
  	"In VLC, I checked the “Use GPU accelerated decoding” box in the Input and Codec settings, but 1080p mp4 files still failed to play properly. I searched and found a solution that worked for me in an AskUbuntu page. So apparently, installing the proprietary GPU driver and ticking a box in VLC is not enough to make VLC use the GPU. You also have to install a bit of software blob so that VLC can use the GPU for decoding. Weird.",
  	"I had no problem ever since with VLC and large H264 files, it works like a charm again, and playback is silky smooth. I really wish I could have the same experience with the FOSS driver, but unfortunately the nice people that make the Linux kernel have not picked on it yet.",
  	"One of my most exciting memory remains seeing my dad coming home from work with a new cool gadget: a ThinkPad laptop.I remember how crazy it sounded in the mid 90s to actually have the power of a computer on the go. It sure did look like the future back then. My dad popped the lid open, and there it was: an IBM ThinkPad, in all its glory, including of course the red nub.",
  	"Why pay so much money for such an old (late 2000s era) laptop? Well, there’s the simple fact that it looks cool and the form factor is perfect (12″ with a very decent keyboard), the design is still spot on and the internals are easily upgradeable (just remove two screws to access the RAM, just one for the hard drive!). This thing is built like a tank and will take abuse with a nonchalant smile. It’s both cheap and cool, not so cheap as to be disposable, but still cheap enough to make it an incredible platform for messy free software experiments.",
  	"I’m in love with my new old ThinkPad X200, but for all its great achievements, it had a major drawback when it came to play videos in Xubuntu. Here’s how I fixed the awful screen tearing in VLC and Parole. I got the machine this week and did the usual: burn a Xubuntu live USB and install it. Everything pretty much worked out of the box except for one annoying thing: ugly screen tearing when playing videos using Parole or VLC.",
  	"I’m extremely pleased with the ThinkPad. Even with its somewhat meager hardware (a Core 2 Duo with a couple gigabytes of RAM and a magnetic 160Gb hard-drive), it boots under a minute and performs every task I throw at it without a hiccup.",
];

// function displayBlocks(){

// 	var nbParagraphesVoulus = document.getElementById("input").value;
// 	var nbParagraphesAffiche = document.getElementsByClassName('paragraphe').length;

//     var paragraphes = document.querySelectorAll('.paragraphe');
// 	for (var i = 1; i < nbParagraphesAffiche; i++) {
// 	   paragraphes[i].classList.remove('show');
// 	}

// 	for (var i = 1; i < nbParagraphesVoulus; i++) {
// 	   paragraphes[i].classList.add('show');
// 	}
// }

function displayBlocks() {
	var nbParagraphesVoulus = document.getElementById('inputBlock').value;
	var $contentElement     = document.getElementById('content');

	// clear content
	$contentElement.innerHTML = "";

	// fill content with paragraphe
	for (var i = 0; i < nbParagraphesVoulus; i++) {
		rand = Math.floor(Math.random() * tabIspum.length);
		div = document.createElement('p');
		div.innerHTML = tabIspum[rand] + "</br>";

		$contentElement.appendChild(div);
	}
}

function displayCharacters() {
	var nbCarateresVoulus = document.getElementById('inputChar').value;
	var $contentElement   = document.getElementById('content');

	// clear content
	$contentElement.innerHTML = "";

	// fill content with paragraphe
	var result = "";
	while (nbCarateresVoulus > 0) {
		rand = Math.floor(Math.random() * tabIspum.length);
		if (nbCarateresVoulus < tabIspum[rand].length) {
			result += tabIspum[rand].substr(0, nbCarateresVoulus);
			nbCarateresVoulus = 0;
		} else {
			result += tabIspum[rand];
			nbCarateresVoulus -= tabIspum[rand].length;
		}

	}

	div = document.createElement('p');
	div.innerHTML = result;

	$contentElement.appendChild(div);
}




