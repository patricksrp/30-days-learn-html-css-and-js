let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set progress bar properties once metadata is loaded
song.onloadedmetadata = function() {
    progress.max = song.duration; // Set max to song duration
    progress.value = song.currentTime; // Set initial value to current time
    console.log(`Song duration: ${song.duration}`); // Log duration
};

// Update progress bar as song plays
song.ontimeupdate = function() {
    progress.value = song.currentTime; // Update current time value
};

// Toggle play/pause functionality
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function backward(){
    song.currentTime -=3;
}
function forward(){
    song.currentTime +=3;
}