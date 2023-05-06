// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  imageSelectionListner(); 
  playSoundListener();
  volumeSliderListener();
}

function imageSelectionListner() {
  const selectElement = document.getElementById("horn-select");
  const imgElement = document.querySelector('img');
  const audioElement = document.querySelector("audio");

  selectElement.addEventListener("change", (event) => {
    let value = event.target.value;
    let imgSrc = `assets/images/${value}.svg`
    let imgAlt = `${value.replace("-", " ")} image`;
    let audioSrc = `assets/audio/${value}.mp3`;

    imgElement.src = imgSrc;
    imgElement.alt = imgAlt;
    audioElement.src = audioSrc;
  })
}

function playSoundListener() {
  const playButton = document.querySelector("button");
  const audioElement = document.querySelector("audio");
  const selectElement = document.getElementById("horn-select");
  const jsConfetti = new JSConfetti();

  playButton.addEventListener("click", () => {
    if (selectElement.value === "select") {
      return;
    }
    console.log("clicked");
    audioElement.play();

    if (selectElement.value === "party-horn") {
      jsConfetti.addConfetti()
    };
  })
}

function volumeSliderListener() {
  const volumeSlider = document.getElementById("volume");
  const audioElement = document.querySelector("audio");
  const volumeImg = document.querySelector("#volume-controls img");

  let volume;
  let level;

  volumeSlider.addEventListener("input", (event) => {
    volume = event.target.value;

    if (volume == 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    } else {
      level = 3;
    }

    volumeImg.src = `assets/icons/volume-level-${level}.svg`;
    volumeImg.alt = `Volume level ${level}`;
    audioElement.volume = volume/100;
  })
}