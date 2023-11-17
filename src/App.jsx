import { Routes, Route } from "react-router-dom";

// Pages
import Header from "./components/Header";
import HotkeyPage from "./components/HotkeyPage";
import FormulaPage from "./components/FormulaPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/hotkeys" element={<HotkeyPage />} />
        <Route path="/formulas" element={<FormulaPage />} />
      </Routes>
    </div>
  );
}

export default App;
