import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import styles from './card.module.css'
import { Link } from 'react-router-dom';


function Card(props) {
   
    return (
        <div className={styles.card}>
            <Link to='#'>

                <h1 className={styles.cardhead}>{props.title}</h1>
                <div className={styles.paragraph}>
                    <p className={styles.cardp}>{props.description}</p>
                    <FaArrowRight className={styles.arrow} />

                </div>
            </Link>
        </div>
    )
}

export default Card
