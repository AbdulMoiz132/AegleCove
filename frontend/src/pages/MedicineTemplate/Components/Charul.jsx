import React from 'react'
import { Link } from 'react-router-dom'
import styles from './charul.module.css'

const Charul = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className={styles.ul}>
     {alphabet.map(alphabets=>{
      return (  
        
        <Link to={`/medicines/${alphabets}`} key={alphabets}><ul className={styles.ul}>{alphabets}</ul></Link>
        
     )})}
 
    </div>
  )
}

export default Charul;