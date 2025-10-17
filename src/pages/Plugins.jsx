import Footer from "../components/Footer";
import Section from "../components/Section";
import Option from "../components/Option";

function Plugins() {
  return (
    <>
      <nav className="bg-dark-green flex flex-row justify-between items-center py-4 px-20 sticky top-0 left-0 z-100">
        <p className="font-mono w-full text-center sm:w-auto sm:text-left font-bold text-xl sm:text-3xl cursor-pointer">
          Config.vim
        </p>
      </nav>
      <Section>Select Plugins</Section>

      <div className="grid grid-cols-1 sm:grid-cols-2  p-10 gap-5">
        <Option>NERDTree</Option>
      </div>

      <Footer />
    </>
  );
}

export default Plugins;
