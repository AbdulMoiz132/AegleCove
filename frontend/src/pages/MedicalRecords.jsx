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
  const [showRecord , setShowRecord] = useState(true);
  const user = useAegleCoveStore ((state) => state.user);
  const handleDeleteRecord = (index) => {
    
    const updatedRecords = [...medicalRecords];
    updatedRecords.splice(index, 1);
  
   
    const updatedUser = {
      ...user,
      medical_history: updatedRecords, 
    };
  
    setUser(updatedUser);
  
    
    handleDelete(updatedUser);
  };
  const handlehide = () => {
    setShowRecord(true);
    setShowMedicalRecordForm(false);
  }
  

  const handleDelete = async (data) => {
    console.log(data)
    setUser(data)
    const response = await fetch('http://localhost:8080/user/update', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok) {
      alert(result.message)
      console.log(result.message);
      setUser(beforeupdate)
      return;
    }
    alert('Record Deleted successfully');
  };

  const toggleMedicalRecordForm = () => {
    setShowMedicalRecordForm(!showMedicalRecordForm);
    setShowRecord(!showRecord);

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
            <MedicalRecordForm handlehide ={handlehide} />
          )}
          {showRecord&&medicalRecords?.length > 0 ? (
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
