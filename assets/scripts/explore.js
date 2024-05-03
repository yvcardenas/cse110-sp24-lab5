// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Constants for elements
  const textToSpeakTextArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  /**
   * On page load:
   * - All of the available voices that you can use for your SpeechSynthesizer should be loaded and populate the select voice dropdown
   */
  //Function to load available voices
  function loadVoices(){
    const synthesizer = window.speechSynthesis;
    const voices = synthesizer.getVoices();
    voices.forEach((voice, index) =>{
      const option = document.createElement('option');
      option.value = index;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  //Load available voices on loaded page
  window.speechSynthesis.onvoiceschanged = loadVoices;

  /**
   * Event listener for "Press to Talk" button
   * - the text that you have typed into the text to speak here text area should be spoken out loud using the voice that you have selected
   */
  talkButton.addEventListener('click', function(){
    const synthesizer = window.speechSynthesis;
    const selectedVoiceIndex = voiceSelect.value;
    const selectedVoice = synthesizer.getVoices()[selectedVoiceIndex];
    const textToSpeak = textToSpeakTextArea.value;

    // Do nothing is the text area is empty
    if(textToSpeak.trim() == ''){
      return;
    }

    // Speak the corresponding text using the selected voice
    const utterence = new SpeechSynthesisUtterance(textToSpeak);
    utterence.voice = selectedVoice;
    // Changes the face image to the open mouth image
    utterence.onstart = function(event){
      faceImage.src = 'assets/images/smiling-open.png';
    };
    // Changes the face image back to the normal one
    utterence.onend = function(event){
      faceImage.src = 'assets/images/smiling.png';
    };
    synthesizer.speak(utterence);
  });
}