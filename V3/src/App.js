import React, { useState } from 'react';
import Game from './components/Game';
import StartPage from './components/StartPage';
import './styles.css';

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="app">
      {started ? <Game /> : <StartPage onStart={() => setStarted(true)} />}
    </div>
  );
}

export default App;
