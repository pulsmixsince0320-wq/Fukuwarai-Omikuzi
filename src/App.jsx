import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [gameState, setGameState] = useState('HOME'); // HOME, GAME, RESULT
  const [resultData, setResultData] = useState(null);

  const startGame = () => {
    setGameState('GAME');
  };

  const finishGame = (data) => {
    setResultData(data); // In this refactor, data isn't really used by ResultScreen for drawing face, but kept for logic
    setGameState('RESULT');
  };

  const resetGame = () => {
    setGameState('HOME');
    setResultData(null);
  };

  return (
    <>
      <div className="bg-overlay"></div>

      {gameState === 'HOME' && <HomeScreen onStart={startGame} />}

      {(gameState === 'GAME' || gameState === 'RESULT') && (
        <GameScreen onFinish={finishGame} isResultMode={gameState === 'RESULT'} />
      )}

      {gameState === 'RESULT' && (
        <ResultScreen onReset={resetGame} />
      )}
    </>
  );
}

export default App;
