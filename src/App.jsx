import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [sumOfSquares, setSumOfSquares] = useState(null);
  const [evenOdd, setEvenOdd] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setResult(null);
    setSumOfSquares(null);
    setEvenOdd("");
  };

  const calculateExpression = () => {
    const a = parseFloat(input);
    const b = a - 15;

    if (!isNaN(a) && a !== b) {
      const expressionResult = ((a + b) / (a - b)) * (a + b);
      setResult(expressionResult.toFixed(2));
    } else {
      setResult("Invalid Input");
    }
  };

  const calculateSumOfSquares = () => {
    const num = parseInt(input);
    if (!isNaN(num)) {
      let sum = 0;
      const digits = Math.abs(num).toString();
      for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), 2);
      }
      setSumOfSquares(sum);
    } else {
      setSumOfSquares('Invalid input');
    }
  };

  const checkEvenOdd = () => {
    const num = parseInt(input);
    if (!isNaN(num)) {
      if (num % 2 === 0) {
        setEvenOdd('The number is even');
      } else {
        setEvenOdd('The number is odd');
      }
    } else {
      setEvenOdd('Invalid input');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter number"
      />
      <br />

      <button onClick={calculateExpression}>Calculate Expression</button>
      <button onClick={calculateSumOfSquares}>MoD_Sum_square</button>
      <button onClick={checkEvenOdd}>Even_ODD</button>

      <div>
        {result !== null && <p><strong>Expression Result:</strong> {result}</p>}
        {sumOfSquares !== null && <p><strong>Sum of Squares of Digits:</strong> {sumOfSquares}</p>}
        {evenOdd && <p><strong>Even or Odd:</strong> {evenOdd}</p>}
      </div>
    </div>
  );
}

export default App;
