import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "../assets/logo75.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.logo}>
        <Link to="/">
          <a>
            <img src={Logo} alt="img" />
          </a>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/hotkeys">
              <p className={styles.navTitle}>Hotkeys</p>
            </Link>
          </li>
          <li>
            <Link to="/formulas">
              <p className={styles.navTitle}>Formulas</p>
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className={styles.themeSwitcher}>
        💡
      </button>
    </header>
  );
};

export default Header;
