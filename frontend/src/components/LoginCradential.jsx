import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from '../styles/form.module.css'


const LoginCradential = () => {
      const {
          register,
          formState: { errors},
          control,
        } = useFormContext();

  return (
    <div className={styles.container}>
    <div className={styles.name_information}>
    <label className={styles.label}>Username:</label>
    <div className={styles.wrapper}>
    <input
      placeholder="Username"
      {...register("username", {
        required: { value: true, message: "Username is required" },
        minLength: {
          value: 5,
          message: "Username must be 5 characters or more.",
        },
      })}
      type="text" className={styles.input}
    />
    {errors.username && <p className={styles.p}>{errors.username.message}</p>}
    </div>
    <label className={styles.label}>Password:</label>
    <div className={styles.wrapper}>
    <input
      placeholder="Password"
      {...register("password", {
        required: { value: true, message: "Password is required" },
        minLength: {
          value: 8,
          message: "Password must be 8 characters long",
        },
      })}
      type="Password" className={styles.input}
    />
    {errors.password && <p className={styles.p}>{errors.password.message}</p>}
    </div>
    </div>
  
    </div>
    
  )
}

export default LoginCradential
