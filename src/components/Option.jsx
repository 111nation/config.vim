function Option(props) {
  return (
    <div
      onClick={props.onClick}
      className={`${!props.active ? "bg-dark-green" : "bg-green"} flex flex-row items-center justify-start overflow-hidden p-3 px-5  text-lg cursor-pointer rounded-lg group ${!props.active && "hover:bg-[#273A33]"}`}
    >
      {props.children}
      <p
        className={`${!props.active ? "text-[#ADC9AD]" : "text-dark-green"}  font-semibold `}
      >
        {props.text}
      </p>
    </div>
  );
}

export default Option;
