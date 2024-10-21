import { useState } from "react";
import formulasData from "../data/formulasData";
import styles from "./DashboardPage.module.css";

const FormulaPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormula, setSelectedFormula] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFormulas = formulasData.filter(
    (formula) =>
      formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formula.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formula.usage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.searchPanel}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search formulas..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
        <ul className={styles.itemList}>
          {filteredFormulas.map((formula, index) => (
            <li
              key={index}
              className={`${styles.itemListEntry} ${
                selectedFormula === formula ? styles.active : ""
              }`}
              onClick={() => setSelectedFormula(formula)}
            >
              {formula.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.displayArea}>
        {selectedFormula ? (
          <div className={styles.card}>
            <p className={styles.formulaDescription}>
              {selectedFormula.description}
            </p>
            <code className={styles.formulaUsage}>{selectedFormula.usage}</code>
          </div>
        ) : (
          <p>Select a formula to view details</p>
        )}
      </div>
    </div>
  );
};

export default FormulaPage;
