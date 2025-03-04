import React from 'react';
import './App.css';

function App() {
  return (
    <div className="calculator">
      <input type="text" id="display" className="display" disabled />
      <div className="buttons">
        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn operator">/</button>

        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn operator">*</button>

        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn operator">-</button>

        <button className="btn">0</button>
        <button className="btn">C</button>
        <button className="btn equal">=</button>
        <button className="btn operator">+</button>
      </div>
    </div>
  );
}

export default App;

