import React, { useState } from 'react';
import styles from '../styles/symptomanalyzer.module.css';
import Logo from '../components/Logo';
import SymptomForm from '../components/SymptomForm';
import SymptomReport from '../components/SymptomReport';

const SymptomAnalyzer = () => {
  const [showForm, setShowForm] = useState(false);
  const [report, setReport] = useState(null);
  const [showReport , setShowReport]= useState(false);

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
    <div className={styles.body}>
      <Logo />
      <h1 className={styles.publicformtitle}>Symptom Analyzer</h1>
      <div className={styles.container}>
        <div className={styles.aboutSymptomAnalyzer} style={{width:showForm||showReport?'30vw':'90vw' ,fontSize:showForm||showReport?'.8rem':'1rem'}} >
          <p className={styles.description} style={{width:showForm||showReport?'30vw':'90vw' ,fontSize:showForm||showReport?'.8rem':'1rem'}}>
          
            Enter your symptoms to get a list of possible conditions. This tool helps you understand what might be causing your symptoms and provides insights into your health.<br/>Click the button Below to use the feature.
          </p>
          <button className={styles.analyzeButton} onClick={handleShowForm}>
            Analyze Now
          </button>
        </div>
        <div className={styles.symptomAnalyzerForm} style={{ right: showForm ? '-5vw' : '-100vw' }}>
          <SymptomForm analysis={handleAnalysis} />
        </div>
        <div className={styles.symptomAnalyzerform} style={{ right: showReport ? '10vw' : '-100vw' }}>
        {report && <SymptomReport report={report} />}
        </div>
      </div>
    </div>
  );
};

export default SymptomAnalyzer;
