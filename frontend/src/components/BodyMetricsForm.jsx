import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from '../styles/form.module.css'


const BodyMetricsForm = () => {
      const {
          register,
          formState: { errors},
          control,
        } = useFormContext();

  return (
    <div className={styles.metrics}>
    <label className={styles.label}>Weight:</label>
    <div className={styles.wrapper}>
    <input
      placeholder="Weight (kg)"
      {...register("weight", {
        required: { value: true, message: "Weight is required" },
              pattern: {
                value: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                message: "Invalid Weight",
              },
      })}
      type="number" className={styles.input}
     
    />
    {errors.weight && <p className={styles.p}>{errors.weight.message}</p>}
    </div>
    <label className={styles.label}>Height:</label>
    <div className={styles.wrapper}>
    <input
      placeholder="Height (inches)"
      {...register("height", {
        required: { value: true, message: "Height is required" },
              pattern: {
                value: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                message: "Invalid height",
              },
      })}
      type="number" className={styles.input}
    />
    {errors.height && <p className={styles.p}>{errors.height.message}</p>}
    </div>
    </div>
  
   
    
  )
}

export default BodyMetricsForm
