import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Option from "../components/ThemeOption";
import { config, themes } from "../config";

function Themes() {
  // You can only select one theme

  let [selected, setSelected] = useState(config.theme);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>Select Theme</Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto max-w-[1200px] p-10 gap-5 mb-[5em]">
        {theme.map((item, i) => (
          <Option
            colors={values[i].colors}
            active={selected == item}
            onClick={() => optionClick(item)}
            key={item}
          >
            {item}
          </Option>
        ))}
      </div>

      <Footer
        prev="/language"
        next="/result"
        onNext={() => (config.theme = selected)}
        onPrev={() => (config.theme = selected)}
      />
    </>
  );
}

export default Themes;
