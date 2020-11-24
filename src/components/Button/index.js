function Button(props) {
  const color = props.type === "operation" ? 'orange' : '';
  const className = `button ${color} ${props.size}`

  const handleClick = () => {
    if ( props.type === "operation" ) {
      return;
    }
    return props.onButtonClick(props.text.toString())
  }

  return (
    <div className={className}>
      <button 
        onClick={handleClick}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;