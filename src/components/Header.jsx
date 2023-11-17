import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.logo}>
        <Link to="/">
          <a>Excel</a>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/hotkeys">Hotkeys</Link>
          </li>
          <li>
            <Link to="/formulas">Formulas</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className={styles.themeSwitcher}>
        Switch Theme
      </button>
    </header>
  );
};

export default Header;
