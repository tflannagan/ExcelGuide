import { useState } from "react";
import hotkeysData from "../data/hotkeysData";
import styles from "./DashboardPage.module.css";

const HotkeyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHotkeys = searchTerm
    ? hotkeysData.filter(
        (hotkey) =>
          hotkey.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotkey.keys.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : hotkeysData;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      {filteredHotkeys.map((hotkey, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.hotkeyContent}>
            <h2 className={styles.cardTitle}>{hotkey.command}</h2>
            <p className={styles.hotkeyKeys}>{hotkey.keys}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotkeyPage;
