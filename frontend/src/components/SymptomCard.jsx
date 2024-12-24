import React from 'react'
import styles from '../styles/symptomcard.module.css'
import OnesymptomCard from './OnesymptomCard'

const SymptomCard = ({ title, symptoms}) => {
  return (
    <div className={styles.symptomCard}>
        <h1>{title}</h1>
        <div className={styles.symptoms}>
            <div className={styles.symptom}>
            {symptoms.map((item, index) => {
                return (
                      <OnesymptomCard key={index} text={item} />
                    )})}
                
                </div>

    </div>
    </div>
  )
}

export default SymptomCard
