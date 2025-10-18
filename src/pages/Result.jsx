import { useState } from "react";
import Config from "../components/Config";
import Homebar from "../components/Homebar";
import PopUp from "../components/PopUp";
import Section from "../components/Section";
import Option from "../components/ImageOption";
import { generateLua, generateVimRC } from "../config";

function Result() {
  let [vimscript, setVimScript] = useState(false);
  let [showPopUp, setPopUp] = useState(false);

  const onCopy = () => {
    let textarea = document.getElementById("config");
    let value = textarea.value;
    navigator.clipboard.writeText(value);

    // Show Pop Up
    setPopUp(<PopUp title="Copied" onClick={() => setPopUp(<></>)}></PopUp>);
  };

  const onDownload = () => {
    let textarea = document.getElementById("config");
    let value = textarea.value;

    const link = document.createElement("a"); // Create 'a' tag to be able to download blob
    const file = new Blob([value], { type: "text/plain" });
    link.href = URL.createObjectURL(file);

    link.download = vimscript ? ".vimrc" : "init.lua";
    link.click();
    URL.revokeObjectURL(link.href);

    // Show Pop Up
    setPopUp(
      <PopUp title="Downloaded" onClick={() => setPopUp(<></>)}></PopUp>,
    );
  };

  const changeConfigType = (_vimscript) => {
    if (vimscript === _vimscript) return;
    setVimScript(_vimscript);
  };

  return (
    <>
      {showPopUp}
      <Section>Download Config</Section>
      <div className="flex flex-col gap-7 sm:gap-4 p-10 max-w-[1600px] m-auto mb-[5em]">
        <div className="w-full flex flex-col sm:flex-row gap-5">
          <Option
            src="/public/Images/nvim.png"
            onClick={() => changeConfigType(false)}
            active={!vimscript}
          >
            Neovim lua
          </Option>
          <Option
            src="/public/Images/vim.png"
            onClick={() => changeConfigType(true)}
            active={vimscript}
          >
            Vimscript
          </Option>
        </div>
        <Config
          onCopy={onCopy}
          onDownload={onDownload}
          className="w-full h-[70vh]"
        >
          {vimscript ? generateVimRC() : generateLua()}
        </Config>
      </div>
      <Homebar></Homebar>
    </>
  );
}

export default Result;
