import formulasData from "../data/formulasData"; // Adjust the path as needed
import styles from "../components/DashboardPage.module.css"; // The CSS module for the dashboard

const FormulaPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Excel Formulas</h2>
        <ul className={styles.cardList}>
          {formulasData.map((formula, index) => (
            <li key={index} className={styles.cardItem}>
              <span>
                <strong>{formula.name}</strong>: {formula.description}
              </span>
              <code className={styles.code}>{formula.usage}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormulaPage;
