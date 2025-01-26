const video = document.getElementById("video");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

playButton.addEventListener("click", () => {
  video.play();
});

pauseButton.addEventListener("click", () => {
  video.pause();
});
