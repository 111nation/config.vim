function Button(props) {
  return (
    <button onClick={props.onClick} class="btn">
      {props.children}
    </button>
  );
}

export default Button;
