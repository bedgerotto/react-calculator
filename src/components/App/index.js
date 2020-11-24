import './index.css';

import { useState } from 'react';

import Display from '../Dispay';
import ButtonPanel from '../ButtonPannel';
import Button from '../Button';

function App() {
  const [displayNumber, setDisplayNumber] = useState('0');
  const [storedNumber, setStoredNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [reset, setReset] = useState(false);

  const handleSetDisplayNumber = (numberString) => {
    if (numberString === '.' && displayNumber.indexOf('.') > -1) {
      return;
    }

    if (reset || displayNumber.toString() === '0') {
      setReset(false);

      return setDisplayNumber(numberString)
    }

    return setDisplayNumber(`${displayNumber}${numberString}`)
  }

  const handleFloatPont = (point) => {
    if (displayNumber.indexOf(point) === -1) {
      handleSetDisplayNumber(point);
    }
  }

  const handlePercentOperation = () => {
    const percentage = (Number(displayNumber) / 100).toString();

    return setDisplayNumber(percentage);
  }

  const handleInverseSignOperation = () => {
    const inverseNumber = (Number(displayNumber) * -1).toString();

    return setDisplayNumber(inverseNumber);
  }

  const handleOperations = (operation) => {
    setOperation(operation);
    setStoredNumber(displayNumber);
    setReset(true);
  }

  const handleEqualOperation = () => {
    if (storedNumber && operation && displayNumber) {
      const result = calculate();

      return setDisplayNumber(result);
    }
  }

  const calculate = () => {
    const operations = {
      '+': () => Number(storedNumber) + Number(displayNumber),
      '-': () => Number(storedNumber) - Number(displayNumber),
      'x': () => Number(storedNumber) * Number(displayNumber),
      '÷': () => Number(storedNumber) / Number(displayNumber),
    }

    return operations[operation].apply();
  }

  const handleAllClearOperation = () => {
    setOperation('')
    setStoredNumber('')
    setReset(false)
    return setDisplayNumber('0')
  }

  return (
    <div className="app">
      
      <Display displayNumber={displayNumber} />
      <ButtonPanel>
        <div>
          <Button type="operation" onButtonClick={handleAllClearOperation} text="AC" />
          <Button type="operation" onButtonClick={handleInverseSignOperation} text="+/-" />
          <Button type="operation" onButtonClick={handlePercentOperation} text="%" />
          <Button type="operation" onButtonClick={handleOperations} backgroundColor="orange" text="÷" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="7" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="8" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="9" />
          <Button type="operation" onButtonClick={handleOperations} backgroundColor="orange" text="x" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="4" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="5" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="6" />
          <Button type="operation" onButtonClick={handleOperations} backgroundColor="orange" text="-" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="1" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="2" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="3" />
          <Button type="operation" onButtonClick={handleOperations} backgroundColor="orange" text="+" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} size="wide" text="0" />
          <Button type="number" onButtonClick={handleFloatPont} text="." />
          <Button type="operation" onButtonClick={handleEqualOperation} text="=" />
        </div>
      </ButtonPanel>
    </div>
  );
}

export default App;
