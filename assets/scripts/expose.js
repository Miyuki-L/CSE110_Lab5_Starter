// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  imageSelectionListner(); 
  playSoundListner();
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

function playSoundListner() {
  const playButton = document.querySelector("button");
  const audioElement = document.querySelector("audio");
  const selectElement = document.getElementById("horn-select");
  const jsConfetti = new JSConfetti();

  playButton.addEventListener("click", () => {
    if (selectElement.value === "select") {
      return;
    }
    
    audioElement.play();

    if (selectElement.value === "party-horn") {
      jsConfetti.addConfetti()
    };
  })
}