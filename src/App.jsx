import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

import Header from "./components/Header";
import HotkeyPage from "./components/HotkeyPage";
import FormulaPage from "./components/FormulaPage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/hotkeys" replace />} />
          <Route path="/hotkeys" element={<HotkeyPage />} />
          <Route path="/formulas" element={<FormulaPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
