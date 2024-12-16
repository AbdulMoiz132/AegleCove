import React from 'react'
import styles from '../styles/dashcard.module.css'
import Button from './Button'
import useAegleCoveStore from '../store/AeglcoveStore'
const DashCard = ({title}) => {
 

  return (
    <div className={styles.Dash_Card}>
              
            <h1>{title}</h1>
            
            <div className={styles.Dash_Card_Container}>
            <p>No Issues Yet</p>
             <div className={styles.btnwrapper}>
            <Button title='Add Details'/>
            </div>
        </div>


        </div>

      
   
  )
}

export default DashCard
