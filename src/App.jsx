import React, { useState } from 'react';
import './App.css';

function App() {
  // State pour afficher la valeur à l'écran
  const [display, setDisplay] = useState('');

  // Fonction pour gérer les clics sur les boutons
  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  // Fonction pour gérer la réinitialisation de l'écran
  const handleClear = () => {
    setDisplay('');
  };

  // Fonction pour gérer le calcul (optionnel, si tu veux ajouter plus tard)
  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());  
    } catch (error) {
      setDisplay('Erreur');  
    }
  };

  return (
    <div className="calculator">
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
        <button className="btn" onClick={handleClear}>C</button>
        <button className="btn equal" onClick={handleEqual}>=</button>
        <button className="btn operator" onClick={() => handleButtonClick('+')}>+</button>
      </div>
    </div>
  );
}

export default App;
