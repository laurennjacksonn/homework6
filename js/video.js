var video;
var volume;
var button;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML = video.volume * 100 + "%";
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	let speed = video.playbackRate * .2;
	video.playbackRate -= speed;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	let speed = video.playbackRate * .25;
	video.playbackRate += speed; 
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 < video.duration) {
		video.currentTime += 60; 
		console.log("Current location is "+ video.currentTime);
	}
	else{
		video.currentTime = 0;
		video.playbackRate = 1; 
		console.log("Current location is "+ video.currentTime);
		console.log("Video Speed back to normal at: "+ video.playbackRate);
	}
} 

function mute() { 
  	if (video.muted == true) {
  		video.muted = false;
  		button = document.querySelector("#mute");
    	button.innerHTML="Mute";
  		console.log("Unmuted");
  	}
  	else {
  		video.muted = true;
  		button = document.querySelector("#mute");
    	button.innerHTML="Unmute";
    	console.log("Muted");
    }
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value/100; 
	console.log("Volume is " + video.volume);
	volume.innerHTML = slider.value + "%";
}
       

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
