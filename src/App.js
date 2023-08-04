import "./App.css";
import { DrumPad } from "./components/DrumPad";

// import and name audio tracks here
import belching from "./audios/belching.mp3";
import boring from "./audios/boring.mp3";
import champion from "./audios/champion.mp3";
import crap from "./audios/crap.mp3";
import dancewgay from "./audios/dancewgay.mp3";
import doh from "./audios/doh1.mp3";
import haha from "./audios/haha.mp3";
import mchocola from "./audios/mchocola.mp3";
import thksnthn from "./audios/thksnthn.mp3";
import { useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("Ready to play...");

  // f to recover text from child component DrumPad to display audio title on display
  const recoverDisplayText = (text, duration) => {
    setDisplayText(text);
    setTimeout(()=>{
      setDisplayText(`Last played: ${text}`)
    }, duration)
  };

  return (
    <>
      <header>Drum machine</header>
      <main id="drum-machine">
        <div id="padKeyboard">
        <DrumPad
          assignedKey="Q"
          audioTitle="Belching"
          audioFile={belching}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="W"
          audioTitle="Doh"
          audioFile={doh}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="E"
          audioTitle="Crap"
          audioFile={crap}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="A"
          audioTitle="Boring"
          audioFile={boring}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="S"
          audioTitle="Haha"
          audioFile={haha}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="D"
          audioTitle="Chocolate"
          audioFile={mchocola}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="Z"
          audioTitle="Champion"
          audioFile={champion}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="X"
          audioTitle="I danced with a gay!"
          audioFile={dancewgay}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        <DrumPad
          assignedKey="C"
          audioTitle="Dear God, thanks for nothing"
          audioFile={thksnthn}
          recoverDisplayText={recoverDisplayText}
        ></DrumPad>
        </div>
        <article id="display">{displayText}</article>
        <article id="controls">
        </article>
      </main>
      <footer>Gonzalo M.G.</footer>
    </>
  );
}

export default App;
