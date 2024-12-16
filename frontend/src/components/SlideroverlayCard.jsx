import {React,useState} from 'react'
import styles from '../styles/slideroverlaycard.module.css'
const SlideroverlayCard = ({ heading, contenttext, src }) => {
  const [overlay, setOverlay] = useState(false);


  const handleclick=()=>{
    setOverlay(!overlay);
  }
  return (
    <div className={styles.sliderCard}>
      <div className={styles.frontCard}>
        <div className="card-img">
          <img src={src} alt="image" />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{heading}</h5>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
      <div className={styles.overlayCard}>
        <div className={styles.head}>
          <h2>{heading}</h2>
      </div>
      <div className={details}>

      </div>

    </div>
    </div>
  )
}

export default SlideroverlayCard
