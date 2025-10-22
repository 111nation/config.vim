import Option from "./Option";

function ThemeOption(props) {
  return (
    <Option onClick={props.onClick} active={props.active} text={props.children}>
      <div className="h-[2em] flex flex-row gap-1 p-3 pl-0 mr-3">
        {props.colors &&
          props.colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="shadow-sm bg-light-green aspect-square rounded-full h-full"
            ></div>
          ))}
      </div>
    </Option>
  );
}

export default ThemeOption;
