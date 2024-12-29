import styles from '../styles/button.module.css'

const Button = ({onClick, title}) => {

  return (
    <div>
      <button className={styles.Button} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button
