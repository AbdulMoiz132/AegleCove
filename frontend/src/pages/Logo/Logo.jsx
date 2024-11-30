import React from 'react'
import { Link } from 'react-router-dom'
import styles from './logo.module.css'

const Logo = (props) => {
  return (
    <div className={styles.head}>
        <Link to='/' className={styles.link}><img src='/images/logo2.png' alt='sham' className={styles.img}></img>AEGLECOVE</Link>
        <div className={styles.righthalf}>  
        {props.title&&<h1>{props.title}</h1>}
        {props.src&&<img src={props.src}></img>}
        
</div>
  </div>
  )

}

export default Logo