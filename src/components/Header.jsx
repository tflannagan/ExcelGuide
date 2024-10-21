import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "../assets/logo75.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { name: "Hotkeys", path: "/hotkeys" },
    { name: "Formulas", path: "/formulas" },
  ];

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
                className={`${styles.navItem} ${
                  activeItem === item.name ? styles.active : ""
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <span className={styles.hoverIndicator} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleTheme} className={styles.themeSwitcher}>
        <span className="material-symbols-outlined">
          {theme === "light" ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </header>
  );
};

export default Header;
