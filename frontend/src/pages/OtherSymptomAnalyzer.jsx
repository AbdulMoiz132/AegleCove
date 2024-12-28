import React, { useState } from 'react';
import DashHeader from '../components/DashHeader';
import DashSidemenu from '../components/DashSidemenu';
import styles from '../styles/symptomanalyzer.module.css';
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


    return (
        <div className={styles.symptomAnalyzerPage}>
            <DashHeader />
            <div className={styles.content}>
                <DashSidemenu />
                <div className={styles.mainContent}>
                    <h1 className={styles.title} style={{left:showForm||showReport?'12vw':'37.5vw'}}>Symptom Analyzer</h1>
                    <div className={styles.container}>
                        <div className={styles.aboutSymptomAnalyzer} style={{width:showForm||showReport?'40vw':'90vw' ,fontSize:showForm||showReport?'.8rem':'1rem'}}>
                            <p className={styles.description} style={{width:showForm||showReport?'40vw':'90vw' ,fontSize:showForm||showReport?'.8rem':'1rem'}}    >
                               Enter your symptoms to get a list of possible conditions. This tool helps you understand what might be causing your symptoms and provides insights into your health.<br />Click the button Below to use the feature.
                            </p>
                            <button className={styles.analyzeButton} onClick={handleShowForm}>
                                Analyze Now
                            </button>
                        </div>
                        <div className={styles.symptomAnalyzerForm} style={{ right: showForm ? '-10vw' : '-100vw' }}>
                            <SymptomForm analysis={handleAnalysis} />
                        </div>
                        <div className={styles.symptomAnalyzerForm} style={{ right: showReport ? '20vw' : '-100vw' }}>
                            {report && <UserSymptomReport report={report}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSymptomAnalyzer;
