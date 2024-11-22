import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import styles from './card.module.css'
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
                    <FaArrowRight className={styles.arrow} />

                </div>
            </Link>
        </div>
    )
}

export default Card
