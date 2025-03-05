import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); 

 
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

 
  const handleButtonClick = (value) => {
    if (display === 'Erreur') setDisplay(value);
    else setDisplay((prevDisplay) => prevDisplay + value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`calculator ${isDarkMode ? 'dark' : ''}`}>
      <input type="text" className="display" value={display} disabled />
      <div className="buttons">
        <button className="btn" onClick={() => handleButtonClick('7')}>7</button>
        <button className="btn" onClick={() => handleButtonClick('8')}>8</button>
        <button className="btn" onClick={() => handleButtonClick('9')}>9</button>
        <button className="btn operator" onClick={() => handleButtonClick('/')}>/</button>

        <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
        <button className="btn" onClick={() => handleButtonClick('5')}>5</button>
        <button className="btn" onClick={() => handleButtonClick('6')}>6</button>
        <button className="btn operator" onClick={() => handleButtonClick('*')}>*</button>

        <button className="btn" onClick={() => handleButtonClick('1')}>1</button>
        <button className="btn" onClick={() => handleButtonClick('2')}>2</button>
        <button className="btn" onClick={() => handleButtonClick('3')}>3</button>
        <button className="btn operator" onClick={() => handleButtonClick('-')}>-</button>

        <button className="btn" onClick={() => handleButtonClick('0')}>0</button>
        <button className="btn" onClick={() => setDisplay('')}>C</button>
        <button className="btn equal" onClick={() => setDisplay(eval(display).toString())}>=</button>
        <button className="btn operator plus" onClick={() => handleButtonClick('+')}>+</button>

        <button className="btn dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'clair' : 'sombre'}
        </button>
      </div>
    </div>
  );
}

export default App;
