// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Constants for elements
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  /**
   * Event listener for horn selection
   * - Correct image should display depending on selection
   * - Correst audio file should be set depending on selection
   */
  hornSelect.addEventListener('change', function(){
      // Corresponding image is deplaying depending on selection
      const hornImage = document.querySelector('#expose img');
      hornImage.src = 'assets/images/${hornSelect.value}.svg';
      // Corresponding audio file is set depending on selection
      audioElement.src = 'assets/audio/${hornSelect.value}.mp3';
  });

  /**
   * Event listener for volume change
   * - 0 volume = mute icon (level 0)
   * - 1 to < 33 = level 1
   * - 33 to < 67 = level 2
   * - 67 and up = level 3
   * - Correct volume icon should be set
   * - Corresponding volume should be set for the audion element
   */
  volumeSlider.addEventListener('input', function(){
    //0 volume = mute icon (level 0)
    if(volumeSlider.value == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } //1 to < 33 = level 1
    else if (volumeSlider.value < 33){ 
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }//33 to < 67 = level 2 
    else if (volumeSlider.value < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }//67 and up = level 3
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    //Corresponding volume is set for the audio element
    audioElement.volume = volumeSlider.value / 100;
  });

  /**
   * Event listener for play sound button click
   * - Corresponding sound for selected horn should play out loud at specific volume
   * - if party horn selected, confetti should shoot out when the play button is clicked (use library)
   */
  playButton.addEventListener('click', function(){
    // Sound for selected horn plays out loud
    audioElement.play();

    // If party horn is selected, confetti is shot out
    if(hornSelect.value == 'party-horn'){
      confetti();
    }
  });
}