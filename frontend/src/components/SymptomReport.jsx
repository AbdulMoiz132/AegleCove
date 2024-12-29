import React from 'react';
import styles from '../styles/symptomreport.module.css';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const SymptomReport = ({ report = {} ,handleback}) => {
  // Function to calculate sorted disease keys
  const getSortedDiseases = () => {
    return Object.entries(report)
      .sort(([, valueA], [, valueB]) => valueB - valueA) 
      .map(([key]) => key); 
  };

  // Result array from the function
  const sortedDiseases = getSortedDiseases();

  return (
    <div className={styles.report}>
      <ImCross className={styles.back} onClick={handleback}/>
      <h2 className={styles.reportTitle}>Analysis Report</h2>
      <p className={styles.reportDescription}>
      Based on the symptoms you provided, the following conditions are listed below, starting with the most likely & onwards:
      </p>
      <ul className={styles.reportList}>
        {sortedDiseases.map((disease, index) => (
          <li key={index} className={styles.reportItem}>
            <strong>{disease}</strong>
          </li>
        ))}
      </ul>
      <p className={styles.note}>For find more detail about conditions click the link below..</p>
      <Link to="/diseases/a" className={styles.link}>Conditions</Link>
      
    </div>
  );
};

export default SymptomReport;
