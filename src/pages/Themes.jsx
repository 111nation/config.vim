import { useState } from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Option from "../components/ThemeOption";
import { themes } from "../config";

function Themes() {
  // You can only select one theme

  let [selected, setSelected] = useState("");
  const theme = Array.from(themes.keys());
  const values = Array.from(themes.values());

  const optionClick = (name) => {
    if (selected == name) {
      // Deselect
      setSelected("");
    } else {
      // Select
      setSelected(name);
    }
  };

  return (
    <>
      <nav className="bg-dark-green flex flex-row justify-between items-center py-4 px-20 sticky top-0 left-0 z-100">
        <p className="font-mono w-full text-center sm:w-auto sm:text-left font-bold text-xl sm:text-3xl cursor-pointer">
          Config.vim
        </p>
      </nav>
      <Section>Select Theme</Section>

      <div className="grid grid-cols-1 sm:grid-cols-2  p-10 gap-5">
        {theme.map((item, i) => (
          <Option
            colors={values[i].colors}
            active={selected == item}
            onClick={() => optionClick(item)}
          >
            {item}
          </Option>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Themes;
