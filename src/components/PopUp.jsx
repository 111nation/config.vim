function PopUp(props) {
  return (
    <div
      onClick={props.onClick}
      class="fixed z-10 w-screen h-screen flex justify-center items-center bg-[rgba(30,35,33,0.7)] backdrop-blur-xs px-5 sm:px-0"
    >
      <div class="bg-light-green text-dark-green pt-2 p-5 px-10 flex flex-col justify-center items-center bg-[#ADC9AD] rounded-lg">
        <p class="text-2xl font-bold mt-2 mb-5 border-b-1 w-full text-center z-12">
          {props.title}
        </p>
        <p class="font-mono text-lg leading-10">
          To install plugins <br />
          <b>Download</b>{" "}
          <a
            class="font-medium underline text-green outline-none"
            href="https://github.com/junegunn/vim-plug"
          >
            vim-plugged
          </a>
          <br />
          <b>Run</b> <code>:PlugInstall</code> and <code>:PlugUpdate</code>
        </p>
        <button onClick={() => props.onClick} class="btn m-5 mb-0 w-full">
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUp;
