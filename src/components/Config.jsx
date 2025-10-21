import { useState } from "react";

function Config(props) {
  let [show, setShow] = useState(false);

  const onShow = () => {
    let temp = show;
    setShow(!temp);
  };

  return (
    <div
      onClick={onShow}
      className={
        props.className +
        " bg-dark-green border-1 border-[#507767] rounded-xl flex flex-col py-5 h-fit cursor-pointer"
      }
    >
      <div className="font-mono text-sm sm:text-md underline font-semibold text-[#87AE87] flex flex-row justify-between px-5">
        <p className="cursor-pointer hover:text-light-green" onClick={onShow}>
          Show
        </p>
        <div className="flex flex-row">
          <p
            onClick={() => props.onCopy()}
            className="mx-5 cursor-pointer hover:text-light-green"
          >
            Copy
          </p>
          <p
            onClick={() => props.onDownload()}
            className="cursor-pointer hover:text-light-green"
          >
            Download
          </p>
        </div>
      </div>

      {show && (
        <div
          className="w-full m-0 p-0 mt-5 sm:mt-0 h-fit"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="font-mono font-medium text-sm sm:text-md outline-none text-light-green text-nowrap sm:text-wrap w-full h-fit text-pretty whitespace-break-spaces m-0 resize-none pl-5 overflow-x-scroll sm:overflow-x-hidden sm:text-wrap cursor-default">
            {props.children}
          </div>
          <textarea
            id="config"
            name="config"
            className="hidden"
            value={props.children}
          ></textarea>
        </div>
      )}
    </div>
  );
}

export default Config;
