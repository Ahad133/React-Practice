import React, { useState } from 'react';
import './index.css';

function Calculator() {
  const [input, setInput] = useState('');

  const addToInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-calc">
      <input className="input-calc" type="text" value={input} readOnly />
      <div className="buttons-calc">
        <button className="button-calc" onClick={() => addToInput('7')}>7</button>
        <button className="button-calc" onClick={() => addToInput('8')}>8</button>
        <button className="button-calc" onClick={() => addToInput('9')}>9</button>
        <button className="button-calc" onClick={() => addToInput('+')}>+</button>
        <button className="button-calc" onClick={() => addToInput('4')}>4</button>
        <button className="button-calc" onClick={() => addToInput('5')}>5</button>
        <button className="button-calc" onClick={() => addToInput('6')}>6</button>
        <button className="button-calc" onClick={() => addToInput('-')}>-</button>
        <button className="button-calc" onClick={() => addToInput('1')}>1</button>
        <button className="button-calc" onClick={() => addToInput('2')}>2</button>
        <button className="button-calc" onClick={() => addToInput('3')}>3</button>
        <button className="button-calc" onClick={() => addToInput('*')}>*</button>
        <button className="button-calc" onClick={() => addToInput('0')}>0</button>
        <button className="button-calc" onClick={() => addToInput('.')}>.</button>
        <button className="button-calc" onClick={clearInput}>C</button>
        <button className="button-calc" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
