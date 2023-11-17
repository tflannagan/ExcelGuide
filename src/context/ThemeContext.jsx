import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PropType validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define the expected type for children
};
