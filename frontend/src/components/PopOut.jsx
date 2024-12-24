import React from 'react'
import styles from '../styles/popout.module.css'
const PopOut = ({title , message}) => {
  return (
    <div className={styles.popout}>
        <div className={styles.popoutcontent}>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.p}>{}</p>
        </div>
      

    </div>
  )
}

export default PopOut
