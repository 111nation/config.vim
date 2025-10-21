function Nav() {
  return (
    <nav className="bg-dark-green flex flex-row justify-between items-center py-4 px-20 sticky top-0 left-0 z-100">
      <p
        className="font-mono w-full text-center sm:w-auto sm:text-left font-bold text-xl sm:text-3xl cursor-pointer select-none"
        onClick={() => (window.location.href = "/")}
      >
        Config.vim
      </p>
    </nav>
  );
}

export default Nav;
