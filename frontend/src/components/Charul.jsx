import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/charul.module.css'

const Charul = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className={styles.alphabets}>
     {alphabet.map(alphabets=>{
      return (  
        
        <Link to={`/medicines/${alphabets.toLowerCase()}`} key={alphabets}>{alphabets}</Link>
        
     )})}
 
    </div>
  )
}

export default Charul;