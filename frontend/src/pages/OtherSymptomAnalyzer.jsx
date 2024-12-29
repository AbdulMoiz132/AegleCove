import React, { useState } from 'react';
import DashHeader from '../components/DashHeader';
import DashSidemenu from '../components/DashSidemenu';
import styles from '../styles/userSymptomanalyzer.module.css';
import SymptomForm from '../components/SymptomForm';
import UserSymptomReport from '../components/UserSymptomReport';

const OtherSymptomAnalyzer = () => {
    const [showForm, setShowForm] = useState(false);
    const [report, setReport] = useState(null);
    const [showReport, setShowReport] = useState(false);


    const handleShowForm = () => {
        setShowForm(!showForm);
        setShowReport(false);
    };

    const handleAnalysis = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/symptoms/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data.symptoms),
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const result = await response.json();
            setReport(result);
            setShowForm(false)
            setShowReport(true)
        } catch (error) {
            console.error('Error analyzing symptoms:', error);
        }
    };
    const handlback=()=>{
        setShowReport(false)
        setShowForm(true)
      }
    


    return (
        <div className={styles.symptomAnalyzerPage}>
            <DashHeader />
            <div className={styles.content}>
                <DashSidemenu />
                <div className={styles.mainContent}>
                    <div className={styles.symptomanlyzercontainer}>
                        <h1 className={styles.formTitle}>Symptom Analyzer</h1>
                        <div className={styles.formdisplay}>
                            <div className={styles.symptomAnalyzerForm} style={{ display: showReport ? 'none' : 'block' }}>
                                <SymptomForm analysis={handleAnalysis} />
                            </div>
                            <div className={styles.symptomAnalyzerreport} style={{ display: showForm ? 'none' : 'block' }}>
                                {report && <UserSymptomReport report={report} handleback={handlback} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSymptomAnalyzer;
