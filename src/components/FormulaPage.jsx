import { useState } from "react";
import formulasData from "../data/formulasData";
import styles from "./DashboardPage.module.css"; 

const FormulaPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFormulas = searchTerm
    ? formulasData.filter(
        (formula) =>
          formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          formula.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          formula.usage.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : formulasData;

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
      {filteredFormulas.map((formula, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.formulaContent}>
            <h2 className={styles.cardTitle}>{formula.name}</h2>
            <p className={styles.formulaDescription}>{formula.description}</p>
            <code className={styles.formulaUsage}>{formula.usage}</code>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormulaPage;
