// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  populateVoiceList();
}

const synth = window.speechSynthesis;

function populateVoiceList() {
  synth.addEventListener("voiceschanged", ()=> {
    const voiceSelect = document.querySelector("#voice-select")
    const voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("index", i);
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      voiceSelect.appendChild(option);
    }    
  })
}