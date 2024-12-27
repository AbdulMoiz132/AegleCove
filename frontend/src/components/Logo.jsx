import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
    <div className={styles.head}>
        <Link to='/' className={styles.link}><img src='/images/logo2.png' alt='AegleCove' className={styles.img}></img></Link>       
  </div>
  <hr className={styles.hr}/>
  </div>
 
  )

}

export default Logo