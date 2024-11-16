import React from 'react'
import styles from './Cardtype3.module.css'

function Cardtype3(props) {
  return (
    <div className={styles.cardtype3}>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p className={styles.mail}>{props.description2}  <a href={props.link}>Info@AegleCove.com</a></p>
    <p>{props.description3}</p>
  </div>
  )
}

export default Cardtype3
