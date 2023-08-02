import './App.css';
import { DrumPad } from './components/DrumPad';
// import and name audio tracks here
import doh from "./audios/doh1.mp3"

function App() {
  return (
    <article id='drum-machine'>
      <DrumPad assignedKey="Q" audioTitle="Doh" audioFile={doh}></DrumPad>
    </article>
  );
}

export default App;
