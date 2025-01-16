let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speech.voice = voices[0]; 
    }

    voices.forEach((voice, i) => {
        let option = new Option(voice.name + (voice.lang ? ` (${voice.lang})` : ""), i);
        voiceSelect.options.add(option);
    });
}

window.speechSynthesis.onvoiceschanged = loadVoices;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.selectedIndex];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
