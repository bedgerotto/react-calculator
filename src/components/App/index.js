import './index.css';

import { useState } from 'react';

import Display from '../Dispay';
import ButtonPanel from '../ButtonPannel';
import Button from '../Button';

function App() {
  const [displayNumber, setDisplayNumber] = useState(0)

  const handleSetDisplayNumber = (numberString) => {
      if (displayNumber.toString() === '0') {
        return setDisplayNumber(numberString)
      }
      return setDisplayNumber(`${displayNumber}${numberString}`)
  }
  return (
    <div className="app">
      
      <Display displayNumber={displayNumber} />
      <ButtonPanel>
        <div>
          <Button text="AC" />
          <Button text="+/-" />
          <Button text="%" />
          <Button type="operation" text="÷" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="7" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="8" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="9" />
          <Button type="operation" text="x" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="4" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="5" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="6" />
          <Button type="operation" text="-" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="1" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="2" />
          <Button type="number" onButtonClick={handleSetDisplayNumber} text="3" />
          <Button type="operation" text="+" />
        </div>
        <div>
          <Button type="number" onButtonClick={handleSetDisplayNumber} size="wide" text="0" />
          <Button text="." />
          <Button text="=" />
        </div>
      </ButtonPanel>
    </div>
  );
}

export default App;
