// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList();
  talkListener();
}

const synth = window.speechSynthesis;
let voices;

function populateVoiceList() {
  synth.addEventListener("voiceschanged", ()=> {
    const voiceSelect = document.querySelector("#voice-select")
    voices = synth.getVoices();

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

function talkListener() {
  const button = document.querySelector("button");
  const selectElement = document.querySelector("#voice-select");
  const textArea = document.getElementById("text-to-speak")
  const img = document.querySelector("img");

  button.addEventListener("click", () => {
    const selectedVoice = selectElement.selectedOptions[0].getAttribute("index");
    const text = textArea.value;
    const utterThis = new SpeechSynthesisUtterance(text);

    if (selectedVoice === null) {
      return;
    }

    utterThis.voice = voices[Number(selectedVoice)];

    utterThis.addEventListener("start", ()=>{
      img.src="assets/images/smiling-open.png";
      img.alt="Smiling face with Open Mouth";
    })

    utterThis.addEventListener("end", ()=>{
      img.src="assets/images/smiling.png";
      img.alt="Smiling face";
    })

    synth.speak(utterThis);

  })
}