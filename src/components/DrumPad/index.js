/* 
button to play sound
*/
import "./index.css";
import PropTypes from "prop-types";

export const DrumPad = ({ assignedKey, audioTitle, audioFile }) => {
   
  //create audio instance  
  let audio = new Audio(audioFile);

  // f to play audio
  const play = () => {
    audio.play();
  };
    
  // f to handle keypress by user: play audio if pressed key corresponds to assigned key
  const handleKeyPress = (event) => {
   if (event.key === (assignedKey.toLowerCase() || assignedKey.toUpperCase())) {
    play();
   }
  }

  // event listener keypress
  document.addEventListener('keydown', handleKeyPress)

  return (
    <button type="button" id={audioTitle} className="drum-pad" onClick={play}>{assignedKey}</button>
  );
};
