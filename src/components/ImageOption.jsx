import Option from "./Option";

function ImageOption(props) {
  return (
    <Option onClick={props.onClick} active={props.active} text={props.children}>
      <img
        className="h-[2em] mr-5 rounded-sm"
        src={props.src}
        alt={props.src}
      />
    </Option>
  );
}

export default ImageOption;
