import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
// Pages
import Header from "./components/Header";
import HotkeyPage from "./components/HotkeyPage";
import FormulaPage from "./components/FormulaPage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <Routes>
        <Route path="/hotkeys" element={<HotkeyPage />} />
        <Route path="/formulas" element={<FormulaPage />} />
      </Routes>
    </div>
  );
}

export default App;
