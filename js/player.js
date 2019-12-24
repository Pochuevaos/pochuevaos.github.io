var videoEl = document.getElementsByTagName('video')[0];
    playBtn = document.getElementById('play__btn');
    playBtnB = document.getElementById('play__btn2');
    volumeControl = document.getElementById('volume__btn');
    var volume = document.getElementById("volume");
    var currentTime = player.currentTime;
    // video.currentTime = 0;
    // videoEl.volume = volumeControl.value;
    


playBtn.addEventListener('click', function (e) {
    event.preventDefault();
    if (videoEl.paused) {
        videoEl.play();
        playBtn.style.display = 'none'
    } else {
        videoEl.pause();
    
    }
}, false);

playBtnB.addEventListener('click', function (e) {
    event.preventDefault();
    if (videoEl.paused) {
        videoEl.play();
        playBtn.style.display = 'none'
    } else {
        videoEl.pause();
        playBtn.style.display = 'block'
    }
}, false);

function setVolume() {
   video.volume = volume.value;
}

function toggleMute() {
    event.preventDefault();
    video.muted = !video.muted;
}
// Прогресс видео
// function updateProgress() {
//     var progress = document.getElementById("progress");
//     var value = 0;
//     if (video.currentTime > 0) {
//        value = Math.floor((100 / video.duration) * video.currentTime);
//     }
//     progress.style.width = value + "%";
//  }

//  video.addEventListener("timeupdate", updateProgress, false);