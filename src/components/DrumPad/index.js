/* 
button to play sound
*/
import { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

export const DrumPad = ({
  assignedKey,
  audioTitle,
  audioFile,
  recoverDisplayText,
}) => {
  // create audio instance
  const audio = new Audio(audioFile);
  // states to activate and modify css when playing
  const [playing, setPlaying] = useState("notPlaying");

  // f to play audio
  const play = (event) => {
    console.log("play - called")
    audio.play();
    // send text to display
    console.log("play - recoverDisplayText")
    recoverDisplayText(audioTitle);
    // modify css
    console.log("play - setPlaying")
    setPlaying("isPlaying");
    setTimeout(() => {
      console.log("play - setPlaying")
      setPlaying("notPlaying");
    }, 1000);
    
    // stop event to prevent play() from being called multiple times per keypress; onClick does not have .stopImmediatePropagation() as function
    if (event.type === "keydown") {
      event.stopImmediatePropagation();
    }
  };

  // f to handle keypress by user: play audio if pressed key corresponds to assigned key
  const handleKeyPress = (event) => {
    if (
      event.key === assignedKey.toLowerCase() ||
      event.key === assignedKey.toUpperCase()
    ) {
      play(event);
    }
  };

  // listener to launch event when user presses a key
  document.addEventListener("keydown", handleKeyPress);

  return (
    <p id={audioTitle} className={`drum-pad ${playing}`} onClick={play}>
      {assignedKey}
    </p>
  );
};

DrumPad.propTypes = {
  assignedKey: PropTypes.string.isRequired,
  audioTitle: PropTypes.string.isRequired,
  audioFile: PropTypes.isRequired,
  recoverDisplayText: PropTypes.func.isRequired
};