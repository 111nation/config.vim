function Config(props) {
  return (
    <div
      class={
        props.className +
        " bg-dark-green border-1 border-[#507767] rounded-xl flex flex-col py-5 px-5"
      }
    >
      <div class="font-mono underline font-semibold text-[#87AE87] flex flex-row justify-end">
        <p
          onClick={props.onCopy}
          class="mx-5 cursor-pointer hover:text-light-green"
        >
          Copy
        </p>
        <p
          onClick={props.onDownload}
          class="cursor-pointer hover:text-light-green"
        >
          Download
        </p>
      </div>
      <div class="w-full m-0 p-0 mt-5 sm:mt-0 h-full">
        <textarea
          class="font-mono font-medium text-sm sm:text-md outline-none text-light-green text-nowrap sm:text-wrap w-full h-full m-0 resize-none"
          name="config"
          id="config"
          value={props.children}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default Config;
