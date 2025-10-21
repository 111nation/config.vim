import Footer from "../components/Footer";
import Section from "../components/Section";
import Option from "../components/Option";

function Plugins() {
  return (
    <>
      <Section>Select Plugins</Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto max-w-[1200px] p-10 gap-5 mb-[5em]">
        <Option>NERDTree</Option>
      </div>

      <Footer />
    </>
  );
}

export default Plugins;
