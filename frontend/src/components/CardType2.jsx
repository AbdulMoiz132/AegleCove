import React from 'react'
import styles from '../styles/Cardtype2.module.css'
function CardType2(props) {
  return (
    <div className={styles.cardtype2}>


      <h1>{props.title}<br/></h1>
       
      <p>{props.description}</p>



    </div>
  )
}

export default CardType2