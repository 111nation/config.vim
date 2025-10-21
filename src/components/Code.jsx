function Code(props) {
  return (
    <div className={props.className}>
      <p className="text-sm">{props.title}</p>
      <div className=" bg-dark-green border-1 border-[#507767] rounded-xl flex flex-col py-5 h-fit">
        <p className="font-mono font-medium text-sm sm:text-md outline-none text-light-green text-nowrap sm:text-wrap w-full h-fit text-pretty whitespace-break-spaces m-0 resize-none pl-5 overflow-x-scroll sm:overflow-x-hidden sm:text-wrap">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default Code;
