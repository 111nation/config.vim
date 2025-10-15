function Search(props) {
  return (
    <input
      className="bg-light-green text-dark-green placeholder-[rgba(30, 35, 31, 0.58)] border-1 border-[#273A33] rounded-full outline-none p-3 mt-5 sm:mt-10 max-w-[700px] text-xl text-center opacity-80 w-[90vw] md:w-[50vw] block m-auto"
      type="text"
      placeholder={props.placeholder}
    />
  );
}

export default Search;
