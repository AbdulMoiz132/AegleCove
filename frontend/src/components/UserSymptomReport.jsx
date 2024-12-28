import React from 'react';
import styles from '../styles/symptomreport.module.css';
import { Link } from 'react-router-dom';
import useAegleCoveStore from '../store/AegleCoveStore';
import { calculateAge } from '../utilities/helperfunctions';
import { jsPDF } from 'jspdf';

const UserSymptomReport = ({ report = {} }) => {
  const user = useAegleCoveStore((state) => state.user);
  const age = calculateAge(user.birthdate);

  // Function to sort diseases based on the report values
  const getSortedDiseases = () => {
    return Object.entries(report)
      .sort(([, valueA], [, valueB]) => valueB - valueA)
      .map(([key]) => key);
  };


  const sortedDiseases = getSortedDiseases();

  const reportDate = new Date().toLocaleDateString();

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add report title
    doc.setFontSize(20);
    doc.text('AegleCove Symptom Analysis Report', 20, 20);

    // Add user info
    doc.setFontSize(14);
    doc.text(`Name: ${user.firstname}`, 20, 30);
    doc.text(`Gender: ${user.gender}`, 20, 40);
    doc.text(`Age: ${age}`, 20, 50);
    doc.text(`Report Date: ${reportDate}`, 20, 60);
    

    // Add diseases list
    doc.text('Sorted Diseases:', 20, 70);
    let yPosition = 80;
    sortedDiseases.forEach((disease, index) => {
      doc.text(`${index + 1}. ${disease}`, 20, yPosition);
      yPosition += 10;
    });


    doc.text('Please consult a doctor for further analysis.', 20, 290);


    // Save PDF
    doc.save('symptom_report.pdf');
  };

  return (
    <div className={styles.report}>
         <button onClick={generatePDF} className={styles.downloadButton}>
        Download PDF
      </button>
      <h2 className={styles.reportTitle}>Analysis Report</h2>
      <div className={styles.userInfo}>
        <p><strong>Name:</strong> {user.firstname}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Report Date:</strong> {reportDate}</p>
      </div>
      
      <ul className={styles.reportList}>
      <h3>Diseases</h3>
        {sortedDiseases.map((disease, index) => (
          <li key={index} className={styles.reportItem}>
            <strong>{disease}</strong>
          </li>
        ))}
      </ul>

      <p className={styles.note}>To find more details about conditions, click the link below:</p>
      <Link to="/diseases/a" className={styles.link}>Conditions</Link>

     
    </div>
  );
};

export default UserSymptomReport;
