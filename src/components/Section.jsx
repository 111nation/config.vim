function Section(props) {
  return (
    <main className="relative w-screen flex flex-col justify-center items-center p-7 border-b-1 border-b-mild-green overflow-hidden">
      <h1 className="font-semibold text-4xl text-center text-light-green-2">
        {props.children}
      </h1>
      <div className="hero-gradient absolute top-0 left-0 w-full h-full -z-2"></div>
      <img
        className="absolute inset-0 w-full object-cover -z-1 opacity-9 blur-[0.75px]"
        src="/public/Images/code_pattern.png"
        alt="Neovim init.vim config"
      />
    </main>
  );
}

export default Section;
