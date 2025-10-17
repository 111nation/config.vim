import Option from "./Option";

function LanguageOption(props) {
  return (
    <Option onClick={props.onClick} active={props.active} text={props.children}>
      <img
        className="h-[2em] mr-5 rounded-sm"
        src={"/public/Images/languages" + props.src}
        alt=""
      />
    </Option>
  );
}

export default LanguageOption;
