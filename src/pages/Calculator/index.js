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
    let inputCopy = input;

    if (/[+\-*/]{2,}/.test(inputCopy)) {
      setInput('Error: Invalid Character');
      return;
    }
  
    let currentNumber = '';
    let currentOperator = '+';
    let total = 0;
    let index = 0;

    while (index < inputCopy.length) {
      const char = inputCopy[index];

      if (/[0-9.]/.test(char) || (char === '-' || char === "+" && currentNumber === '')) {
        currentNumber += char;
      } else if (/[+\-*/.]/.test(char)) {
        if (currentNumber !== '') {
          const number = parseFloat(currentNumber);

          switch (currentOperator) {
            case '+':
              total += number;
              break;
            case '-':
              total -= number;
              break;
            case '*':
              total *= number;
              break;
            case '/':
              if (number !== 0) {
                total /= number;
              } else {
                setInput('Error: Division by zero');
                return;
              }
              break;
            default:
              break;
          }
        } else {
          setInput('Error: Invalid Character');
          return;
        }
        currentNumber = '';
        currentOperator = char;
      } else {
        setInput('Error: Invalid character');
        return;
      }

      index++;
    }

    if (currentNumber !== '') {
      const number = parseFloat(currentNumber);

      switch (currentOperator) {
        case '+':
          total += number;
          break;
        case '-':
          total -= number;
          break;
        case '*':
          total *= number;
          break;
        case '/':
          if (number !== 0) {
            total /= number;
          } else {
            setInput('Error: Division by zero');
            return;
          }
          break;
        default:
          break;
      }
    }
    setInput(total.toString());
    if (isNaN(total)) {
      setInput('Error: Invalid Character');
    } else {
      setInput(total.toString());
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
          <button className="button-calc" onClick={clearInput}>C</button>
          <button className="button-calc" onClick={() => addToInput('0')}>0</button>
          <button className="button-calc" onClick={() => addToInput('.')}>.</button>
          <button className="button-calc" onClick={() => addToInput('/')}>/</button>
          <button className="button-equals" onClick={calculateResult}>=</button>
        </div>
    </div>
  );
}

export default Calculator;
