import Button from '../Button';

function ButtonNumber(props) {
  const size = props.text === '0' ? 'wide' : '';

  return <Button type="number" onButtonClick={props.onButtonClick} size={size} text={props.text} />
}

export default ButtonNumber;