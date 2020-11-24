function Button(props) {
  const className = `button ${props.backgroundColor} ${props.size}`

  const handleClick = () => {
    if ( !props.onButtonClick ) {
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