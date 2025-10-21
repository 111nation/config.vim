import Footer from "../components/Footer";
import Section from "../components/Section";
import Option from "../components/ImageOption";
import { config, languages } from "../config";
import { useEffect, useState } from "react";

function Languages() {
  let [selected, setSelected] = useState([...config.languages]);

  const name = Array.from(languages.keys());
  const value = Array.from(languages.values());

  const optionClick = (name) => {
    let temp = [...selected];
    if (selected.includes(name)) {
      // Deselect
      let index = selected.indexOf(name);
      temp.splice(index, 1); // Remove 1st element at index 'index'
    } else {
      // Select
      temp.push(name);
    }

    setSelected([...temp]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>Select Language</Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto max-w-[1200px] p-10 gap-5 mb-[5em]">
        {name.map((item, i) => (
          <Option
            onClick={() => optionClick(item)}
            active={selected.includes(item)}
            src={"/Images/languages/" + value[i].image}
            key={i}
          >
            {item}
          </Option>
        ))}
      </div>

      <Footer
        next="/theme"
        onNext={() => (config.languages = [...selected])}
        onPrev={() => (config.languages = [...selected])}
      />
    </>
  );
}

export default Languages;
