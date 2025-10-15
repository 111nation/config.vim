import Footer from "../components/Footer";
import Search from "../components/Search";
import Section from "../components/Section";
import Card from "../components/Card";

function SelectLanguage() {
  return (
    <>
      <nav className="bg-dark-green flex flex-row justify-between items-center py-4 px-20 sticky top-0 left-0 z-100">
        <p className="font-mono w-full text-center sm:w-auto sm:text-left font-bold text-xl sm:text-3xl cursor-pointer">
          Config.vim
        </p>
      </nav>
      <Section>Select Language</Section>
      <Search placeholder="Rust..." />
      <div class="p-7 sm:p-10 xl:px-30 grid grid-cols-2 gap-4 md:grid-cols-4  md:gap-4 xl:grid-cols-6 xl:gap-5">
        <Card>Rust</Card>
        <Card>C++</Card>
        <Card>C</Card>
        <Card>HTML/CSS</Card>
        <Card>JavaScript</Card>
      </div>
      <Footer />
    </>
  );
}

export default SelectLanguage;
