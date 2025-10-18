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
      <nav className="bg-dark-green flex flex-row justify-between items-center py-4 px-20 sticky top-0 left-0 z-100">
        <p className="font-mono w-full text-center sm:w-auto sm:text-left font-bold text-xl sm:text-3xl cursor-pointer">
          Config.vim
        </p>
      </nav>
      <Section>Select Language</Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto max-w-[1200px] p-10 gap-5">
        {name.map((item, i) => (
          <Option
            onClick={() => optionClick(item)}
            active={selected.includes(item)}
            src={"/public/Images/languages/" + value[i].image}
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
