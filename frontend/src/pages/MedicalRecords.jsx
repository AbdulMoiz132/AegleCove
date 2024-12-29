import React, { useState } from 'react';
import DashHeader from '../components/DashHeader';
import DashSidemenu from '../components/DashSidemenu';
import MedicalRecordForm from '../components/MedicalRecordForm';
import useAegleCoveStore from '../store/AegleCoveStore';
import styles from '../styles/medicalrecords.module.css';

const MedicalRecords = () => {
  const medicalRecords = useAegleCoveStore((state) => state.user.medical_history);
  const setUser = useAegleCoveStore((state) => state.setUser);
  const [showMedicalRecordForm, setShowMedicalRecordForm] = useState(false);
  const [editRecordIndex, setEditRecordIndex] = useState(null);

  const handleDeleteRecord = (index) => {
    const updatedRecords = [...medicalRecords];
    updatedRecords.splice(index, 1);
    setUser({ medical_history: updatedRecords });
  };

  // const handleMedicalRecordSubmit = (data) => {
  //   const updatedRecords = [...medicalRecords];
  //   if (editRecordIndex !== null) {
  //     updatedRecords[editRecordIndex] = data;
  //     setEditRecordIndex(null);
  //   } else {
  //     updatedRecords.push(data);
  //   }
  //   setUser({ medical_history: updatedRecords });
  //   setShowMedicalRecordForm(false);
  // };

  const toggleMedicalRecordForm = () => {
    setShowMedicalRecordForm(!showMedicalRecordForm);
    setEditRecordIndex(null);
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
          </div>
          {showMedicalRecordForm && (
            <MedicalRecordForm/>
          )}
          {medicalRecords?.length > 0 ? (
            medicalRecords.map((record, index) => (
              <div key={index} className={styles.recordCard}>
                <h3>{record.diseasename}</h3>
                <p>Type: {record.type}</p>
                <p>Medications:</p>
                <ul>
                  {record.medicines.map((med, idx) => (
                    <li key={idx}>{med}</li>
                  ))}
                </ul>
                <button className={styles.deleteButton} onClick={() => handleDeleteRecord(index)}>Delete</button>
              </div>
            ))
          ) : (
            !showMedicalRecordForm && <p>Click the "Add Record" button to add a medical record.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
