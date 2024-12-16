import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import styles from '../styles/card.module.css'
import { Link ,useParams} from 'react-router-dom';

function Card(props) {
    const {head}=useParams();
    
   
    return (
        <div className={styles.card}>
            <Link to={props.link}>
                <h1>{head}</h1>
                <h1 className={styles.cardhead}>{props.title}</h1>
                <div className={styles.paragraph}>
                    <p className={styles.cardp}>{props.description}</p>
                  

                </div>
            </Link>
            <Link to={props.link} className={styles.button}><span className={styles.span}>{props.button}  <FaArrowRight className={styles.arrow}/></span> </Link>
        </div>  
    )
}

export default Card
