import './index.css';

import { useState } from 'react';

import Display from '../Dispay';
import ButtonPanel from '../ButtonPannel';
import ButtonNumber from '../ButtonNumber';
import ButtonOperation from '../ButtonOperation';

function App() {
  const [displayNumber, setDisplayNumber] = useState('0');
  const [storedNumber, setStoredNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [reset, setReset] = useState(false);

  const handleSetDisplayNumber = (numberString) => {
    if (numberString === '.' && displayNumber.indexOf('.') > -1) {
      return;
    }

    if ((reset || displayNumber.toString() === '0') && numberString !== '.') {
      setReset(false);

      return setDisplayNumber(numberString)
    }

    return setDisplayNumber(`${displayNumber}${numberString}`)
  }

  const handleFloatPont = (point) => {
    if (displayNumber.indexOf(point) === -1) {
      return handleSetDisplayNumber(point);
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

  const handleOperations = (currentOperation) => {
    if (operation) {
      setStoredNumber(handleEqualOperation());
    } else {
      setStoredNumber(displayNumber);
    }

    setOperation(currentOperation);
    setReset(true);
  }

  const handleEqualOperation = () => {
    if (storedNumber && operation && displayNumber) {
      const result = calculate();

      setDisplayNumber(result);
      return result;
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
          <ButtonOperation onButtonClick={handleAllClearOperation} text="AC" />
          <ButtonOperation onButtonClick={handleInverseSignOperation} text="+/-" />
          <ButtonOperation onButtonClick={handlePercentOperation} text="%" />
          <ButtonOperation onButtonClick={handleOperations} text="÷" />
        </div>
        <div>
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="7" />
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="8" />
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="9" />
          <ButtonOperation onButtonClick={handleOperations} text="x" />
        </div>
        <div>
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="4" />
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="5" />
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="6" />
          <ButtonOperation onButtonClick={handleOperations} text="-" />
        </div>
        <div>
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="1" />
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="2" />
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="3" />
          <ButtonOperation onButtonClick={handleOperations} text="+" />
        </div>
        <div>
          <ButtonNumber onButtonClick={handleSetDisplayNumber} text="0" />
          <ButtonNumber onButtonClick={handleFloatPont} text="." />
          <ButtonOperation onButtonClick={handleEqualOperation} text="=" />
        </div>
      </ButtonPanel>
    </div>
  );
}

export default App;
