import Button from '../Button';

const BASIC_OPERATIONS = ['+', '-', 'x', '÷']

function ButtonOperation(props) {
  const color = BASIC_OPERATIONS.includes(props.text) ? 'orange' : '';

  return <Button type="operation" onButtonClick={props.onButtonClick} backgroundColor={color} text={props.text} />
}

export default ButtonOperation;