import React from 'react';

function DrumButton({ letter, soundFile }) {
  const playSound = () => {
    
    const audio = new Audio(`/sounds/${soundFile}`);
    audio.play();
  };

  return (
    <button className="drum" onClick={playSound}>
      {letter}
    </button>
  );
}

export default DrumButton;