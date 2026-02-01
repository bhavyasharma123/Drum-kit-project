import DrumButton from "./components/DrumButton"; 
import "./App.css";

function App() {
  const drums = [
    { letter: "w", sound: "tom-1.mp3" },
    { letter: "a", sound: "tom-2.mp3" },
    { letter: "s", sound: "tom-3.mp3" },
    { letter: "d", sound: "tom-4.mp3" },
    { letter: "j", sound: "snare.mp3" },
    { letter: "k", sound: "crash.mp3" },
    { letter: "l", sound: "kick-bass.mp3" },
  ];

  return (
    <div className="container">
      <h1>Drum 🥁 Kit</h1>
      <div className="set">
        {drums.map((drum) => (
          <DrumButton 
            key={drum.letter} 
            letter={drum.letter} 
            soundFile={drum.sound} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;