import hotkeysData from "../data/hotkeysData"; // Adjust the path as needed
import styles from "./DashboardPage.module.css"; // The CSS module for the dashboard

const HotkeyPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Excel Hotkeys</h2>
        <ul className={styles.cardList}>
          {hotkeysData.map((hotkey, index) => (
            <li key={index} className={styles.cardItem}>
              <span>
                <strong>{hotkey.command}</strong>: {hotkey.keys}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotkeyPage;
