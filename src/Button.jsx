function Button(props) {
  return (
    <button
      type="button"
      className={"btn btn-" + props.color}
      onClick={props.onClick}
    >
      {props.buttonname}
    </button>
  );
}

export default Button;
