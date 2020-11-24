function Display(props) {
  return (
    <div className="display">
      <div>{props.displayNumber.toString()}</div>
    </div>
  );
}

export default Display;