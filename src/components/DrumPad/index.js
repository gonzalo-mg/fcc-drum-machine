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
  const clip = new Audio(audioFile);
  // states to activate and modify css when playing
  const [playing, setPlaying] = useState("notPlaying");

  // f to play audio
  const play = (event) => {
    console.log("play called");
    // stop event to prevent play() from being called multiple times per keypress; onClick does not have .stopImmediatePropagation() as function
    if (event.type === "keydown") {
      event.stopImmediatePropagation();
    }
    clip.play();
    playCSS();
  };

  // f to modify css on play
  const playCSS = () => {
    // send text to display
    recoverDisplayText(audioTitle);
    // modify css
    setPlaying("isPlaying");
    setTimeout(() => {
      setPlaying("notPlaying");
    }, 1000);
  };

  // f to handle keypress by user: play audio if pressed key corresponds to assigned key
  const handleKeyPress = (event) => {
    setPlaying("isPlaying"); // set state to true
    console.log("handleKeyPress - called");
    if (
      event.key === assignedKey.toLowerCase() ||
      event.key === assignedKey.toUpperCase()
    ) {
      playCSS();
      play(event);
    }
  };

  // listener to launch event when user presses a key
  document.addEventListener("keydown", handleKeyPress);

  return (
    <p id={audioTitle} className={`drum-pad ${playing}`} onClick={play}>
      {playing}
    </p>
  );
};

DrumPad.propTypes = {
  assignedKey: PropTypes.string.isRequired,
  audioTitle: PropTypes.string.isRequired,
  audioFile: PropTypes.string.isRequired,
  recoverDisplayText: PropTypes.func.isRequired,
};
