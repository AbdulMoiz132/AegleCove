import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { bmi_calc } from '../utilities/helperfunctions';
import styles from '../styles/bmi.module.css';

const Bmi = () => {
  const [bmiResult, setBmiResult] = useState({
    bmi: null,
    status: null,
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm();

  const handleCalc = (data) => {
    const bmi = bmi_calc(data.Weight, data.Height, data.Age, data.Gender);
    setBmiResult({
      bmi: bmi.yourbmi,
      status: bmi.message,
    });
  };

  return (
    <div className={styles.bmiComponent}>
      <h1 className={styles.title}>BMI Calculator</h1>
      <form onSubmit={handleSubmit(handleCalc)} className={styles.bmiForm}>
        <div className={styles.formGroup}>
          <label htmlFor="Height" className={styles.label}>Height (inches):</label>
          <input
            id="Height"
            placeholder="Height"
            disabled={isSubmitting}
            {...register("Height", {
              required: { value: true, message: "Height is required" },
              pattern: {
                value: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                message: "Invalid height",
              },
            })}
            type="number"
            step="any"
            className={styles.input}
          />
          {errors.Height && <p className={styles.error}>{errors.Height.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Weight" className={styles.label}>Weight (kg):</label>
          <input
            id="Weight"
            placeholder="Weight"
            disabled={isSubmitting}
            {...register("Weight", {
              required: { value: true, message: "Weight is required" },
              pattern: {
                value: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                message: "Invalid weight",
              },
            })}
            type="number"
            step="any"
            className={styles.input}
          />
          {errors.Weight && <p className={styles.error}>{errors.Weight.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Gender" className={styles.label}>Gender:</label>
          <Controller
            name="Gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field} id="Gender" className={styles.input}>
                <option value="" disabled>Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            )}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Age" className={styles.label}>Age:</label>
          <input
            id="Age"
            placeholder="Age"
            disabled={isSubmitting}
            {...register("Age", {
              required: { value: true, message: "Age is required" },
              pattern: {
                value: /^[0-9]+$/,
                message: "Invalid age",
              },
            })}
            type="number"
            className={styles.input}
          />
          {errors.Age && <p className={styles.error}>{errors.Age.message}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>Calculate</button>
      </form>

      {bmiResult.bmi && <p className={styles.message}>Your BMI: {bmiResult.bmi}</p>}
      {bmiResult.status && <p className={styles.message}>You are: {bmiResult.status}</p>}
    </div>
  );
};

export default Bmi;
