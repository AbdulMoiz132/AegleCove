import React, { useState } from 'react';
import DashHeader from '../components/DashHeader';
import DashSidemenu from '../components/DashSidemenu';
import MedicalRecordForm from '../components/MedicalRecordForm';
import useAegleCoveStore from '../store/AeglCoveStore';
import styles from '../styles/medicalrecords.module.css';

const MedicalRecords = () => {
  const medicalRecords = useAegleCoveStore((state) => state.user.medical_history);
  const setUser = useAegleCoveStore((state) => state.setUser);
  const [showBodyMetricsForm, setShowBodyMetricsForm] = useState(false);
  const [showMedicalRecordForm, setShowMedicalRecordForm] = useState(false);

  const handleDeleteRecord = (index) => {
    const updatedRecords = [...medicalRecords];
    updatedRecords.splice(index, 1);
    setUser({ medical_history: updatedRecords });
  };

  const handleBodyMetricsSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const weight = data.get('weight');
    const height = data.get('height');
    console.log({ weight, height });
    // Handle body metrics form submission logic here
  };

  const handleMedicalRecordSubmit = (data) => {
    console.log(data);
    // Handle medical record form submission logic here
  };

  const toggleMedicalRecordForm = () => {
    setShowMedicalRecordForm(!showMedicalRecordForm);
    if (showBodyMetricsForm) setShowBodyMetricsForm(false);
  };

  const toggleBodyMetricsForm = () => {
    setShowBodyMetricsForm(!showBodyMetricsForm);
    if (showMedicalRecordForm) setShowMedicalRecordForm(false);
  };

  return (
    <div className={styles.medicalRecordsPage}>
      <DashHeader />
      <div className={styles.content}>
        <DashSidemenu />
        <div className={styles.mainContent}>
          <h1>Medical Records</h1>
          <div className={styles.buttonRow}>
            <button className={styles.actionButton} onClick={toggleMedicalRecordForm}>Add Record</button>
            <button className={styles.actionButton} onClick={toggleBodyMetricsForm}>Add Body Metrics</button>
          </div>
          {showMedicalRecordForm && (
            <MedicalRecordForm onSubmit={handleMedicalRecordSubmit} />
          )}
          {showBodyMetricsForm && (
            <form className={styles.bodyMetricsForm} onSubmit={handleBodyMetricsSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" name="weight" type="number" className={styles.inputField} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="height">Height (inches)</label>
                <input id="height" name="height" type="number" className={styles.inputField} />
              </div>
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          )}
          {medicalRecords.length > 0 ? (
            medicalRecords.map((record, index) => (
              <div key={index} className={styles.recordCard}>
                <h3>{record.diseaseName}</h3>
                <p>Type: {record.diseaseType}</p>
                <p>Medications:</p>
                <ul>
                  {record.medications.map((med, idx) => (
                    <li key={idx}>{med.medicineName} - {med.dosage} - {med.timing}</li>
                  ))}
                </ul>
                <p>Doctor Visits: {record.doctorVisits}</p>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton} onClick={() => handleDeleteRecord(index)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No medical records found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
