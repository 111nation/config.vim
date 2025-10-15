import { useState } from "react";
import Card from "../components/Card";
import Config from "../components/Config";
import Homebar from "../components/Homebar";
import PopUp from "../components/PopUp";
import Section from "../components/Section";

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

    link.download = vimscript ? ".vimrc" : "init.vim";
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
      <div class="flex flex-col sm:flex-row gap-7 sm:gap-4 p-10 max-w-[1600px] m-auto">
        <div class="w-full sm:w-[25%] max-w-[500px] sm:max-w-[200px] flex flex-row sm:flex-col gap-5">
          <Card onClick={() => changeConfigType(false)} active={!vimscript}>
            NEOVIM LUA
          </Card>
          <Card onClick={() => changeConfigType(true)} active={vimscript}>
            VIMSCRIPT
          </Card>
        </div>
        <Config
          onCopy={onCopy}
          onDownload={onDownload}
          className="w-full h-[70vh]"
        ></Config>
      </div>
      <Homebar></Homebar>
    </>
  );
}

export default Result;
