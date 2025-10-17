function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className + " btn"}>
      {props.children}
    </button>
  );
}

export default Button;
