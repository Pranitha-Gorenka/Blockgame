import React, { useState } from 'react';
import Mole from '../Mole';
import ScoreBoard from '../ScoreBoard';
import useInterval from '../../hooks/useInterval';
import '../../styles.css';

const HOLES = 6;

function Game() {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);

  useInterval(() => {
    setMoleIndex(Math.floor(Math.random() * HOLES));
  }, 1000);

  const whackMole = index => {
    if (index === moleIndex) {
      setScore(prev => prev + 1);
      setMoleIndex(null);
    }
  };

  return (
    <div className="game">
      <ScoreBoard score={score} />
      <div className="grid">
        {Array.from({ length: HOLES }).map((_, i) => (
          <Mole key={i} active={i === moleIndex} onClick={() => whackMole(i)} />
        ))}
      </div>
    </div>
  );
}

export default Game;

