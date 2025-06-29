import React from 'react';

function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <h1>Whack-a-Mole</h1>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}

export default StartPage;

