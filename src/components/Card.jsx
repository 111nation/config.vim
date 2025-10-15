function Card(props) {
  let className =
    "card bg-[#ADC9AD] p-0 aspect-auto h-auto max-h-none hover:opacity-100 rounded-xl hovervshadow-xl ";

  if (props.active) {
    className += "opacity-100 scale-101";
  }
  return (
    <div onClick={props.onClick} class={className}>
      <img
        className="relative w-full shadow-xl"
        src="/public/Images/rust.webp"
        alt="vim theme and neovim plugins"
      />
      <p className="absolute m-0 w-full text-center rounded-none py-2 text-lg">
        {props.children}
      </p>
    </div>
  );
}

export default Card;
