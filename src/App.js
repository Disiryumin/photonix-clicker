import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <h1>Photonix Clicker</h1>
      <p>Your Score: {score}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;