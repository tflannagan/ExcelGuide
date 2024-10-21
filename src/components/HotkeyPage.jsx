import { useState } from "react";
import hotkeysData from "../data/hotkeysData";
import styles from "./DashboardPage.module.css";

const HotkeyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHotkey, setSelectedHotkey] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHotkeys = hotkeysData.filter(
    (hotkey) =>
      hotkey.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotkey.keys.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.searchPanel}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search hotkeys..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
        <ul className={styles.itemList}>
          {filteredHotkeys.map((hotkey, index) => (
            <li
              key={index}
              className={`${styles.itemListEntry} ${
                selectedHotkey === hotkey ? styles.active : ""
              }`}
              onClick={() => setSelectedHotkey(hotkey)}
            >
              {hotkey.command}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.displayArea}>
        {selectedHotkey ? (
          <div className={styles.card}>
            <p className={styles.hotkeyKeys}>{selectedHotkey.keys}</p>
          </div>
        ) : (
          <p>Select a hotkey to view details</p>
        )}
      </div>
    </div>
  );
};

export default HotkeyPage;
