import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/charul.module.css'

const Charul = ({page,char}) => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
   
  return (
    <div className={styles.alphabets}>
     {alphabet.map(alphabets=>{
      return (  
      
        <Link to={`/${page}/${alphabets.toLowerCase()}`} key={alphabets}  
        style={{
          color: alphabets.toLowerCase()==char.toLowerCase() && 'white',
          backgroundColor: alphabets.toLowerCase()==char.toLowerCase() && '#181818',
         
        }} >{alphabets}</Link>
        
     )})}
 
    </div>
  )
}

export default Charul;