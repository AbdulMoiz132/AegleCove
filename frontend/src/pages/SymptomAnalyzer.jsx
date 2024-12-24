import React from 'react'
import styles from '../styles/symptomanalyzer.module.css'
import Logo from '../components/Logo.jsx'
// import SymptomCard from '../components/SymptomCard.jsx'
// import useAegleCoveStore from '../store/AeglcoveStore.js'
// import Swiper from 'swiper'
// import { Slide } from 'react-slideshow-image'
// import Slider from '../components/Slider.jsx'
// import Button from '../components/Button.jsx'
import SymptomForm from '../components/SymptomForm.jsx'
import { useState } from 'react'



const SymptomAnalyzer = () => {
    // const symptoms= useAegleCoveStore((state) => state.somecommonconditions);
    // console.log(symptoms)
    const [showform,setShowform]=useState(false)
    const handleshowform = () => {
        setShowform(!showform)

    }
    
    return (
        <div className={styles.body}>
           <Logo/>
           <h1 className={styles.title}>Symptom Analyzer</h1>
           <div className={styles.container}>
            <div className={styles.aboutSymptomAnalyzer}>
              
                <p className={styles.description}>Enter your symptoms below to get a list of possible conditions</p> 
                <button onClick={handleshowform}>Analyze Now</button>   
            </div>
              <div className={styles.symptomanalyzerform} style={{right:showform?'0vw':'-100vw'}}>
               <SymptomForm/>
               </div>

            </div>
           
        </div>
    )
}

export default SymptomAnalyzer
