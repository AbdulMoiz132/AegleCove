import React from 'react'
import styles from '../styles/symptomanalyzer.module.css'
import Logo from '../components/Logo.jsx'
import SymptomCard from '../components/SymptomCard.jsx'
import useAegleCoveStore from '../store/AeglcoveStore.js'
import Swiper from 'swiper'
import { Slide } from 'react-slideshow-image'
import Slider from '../components/Slider.jsx'
import Button from '../components/Button.jsx'


const SymptomAnalyzer = () => {
    const symptoms= useAegleCoveStore((state) => state.somecommonconditions);
    console.log(symptoms)
    return (
        <div className={styles.body}>
            <header>
                <Logo/>
                <div className={styles.slider}> 
                <Slider conditions={symptoms}/>
                <div className={styles.overlay}>
                <h1 className={styles.heading}>SYMPTOM ANALYZER</h1>
                <button className={styles.button}>Analyze Your Symptoms</button>
                </div>
                </div>
            </header>
        </div>
    )
}

export default SymptomAnalyzer
