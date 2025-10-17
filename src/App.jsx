import { MemoryRouter, Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
import Languages from "./pages/Languages";
import Themes from "./pages/Themes";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Languages />} />
        <Route path="/language" element={<Languages />} />
        <Route path="/theme" element={<Themes />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
