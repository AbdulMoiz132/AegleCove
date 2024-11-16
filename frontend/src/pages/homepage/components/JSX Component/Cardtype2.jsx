import React from 'react'
import styles from './Cardtype2.module.css'
function Cardtype2(props) {
  return (
    <div className={styles.cardtype2}>


      <h1>{props.title}</h1>

      <p>{props.description}</p>



    </div>
  )
}

export default Cardtype2