// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  imageSelectionListner(); 
}

function imageSelectionListner() {
  const selectElement = document.getElementById("horn-select");
  const imgElement = document.querySelector('img');
  const audioElement = document.getElementsByClassName("hidden");

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