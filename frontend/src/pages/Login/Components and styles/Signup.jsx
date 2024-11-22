import React from 'react'
import { useForm } from "react-hook-form"
import styles from './form.module.css'
import { Link,  Route,  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Medicinedetails from '../../MedicineTemplate/Components/Medicinedetails';
function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [message, setmessage] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {


    try {
      console.log(data);
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
        // Send numbers as JSON
      }).then(response => response.json())
        .then(data => {
          console.log(JSON.stringify(data, null, 4));
          setmessage('Account created Successfully')
          setTimeout(() => {
            setmessage('')
          {<Route path="/personalinformation" element={<Medicinedetails/>} />}
            navigate("/personalinformation");
          }, 1000);
        })

    } catch { }
  } // your form submit function which will invoke after successful validation
  return (

    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.h1}>SIGN UP</h1>
      {/* register your input into the hook by invoking the "register" function */}
      {isSubmitting && <div>Loading...</div>}
      <label className={styles.label}>Name:</label>
      <input
        placeholder="Name"
        disabled={isSubmitting}
        {...register("Name", {
          required: { value: true, message: "Name is required" },
        })}
        type="text" className={styles.input}
      />
      {errors.Name && <p className={styles.p}>{errors.Name.message}</p>}
      <label className={styles.label}>Username:</label>
      <input
        placeholder="Username"
        disabled={isSubmitting}
        {...register("Username", {
          required: { value: true, message: "Username is required" },
          minLength: {
            value: 5,
            message: "Username must be 5 characters or more.",
          },
        })}
        type="text" className={styles.input}
      />
      {errors.Username && <p className={styles.p}>{errors.Username.message}</p>}
      <label className={styles.label}>Password:</label>
      <input
        placeholder="Password"
        disabled={isSubmitting}
        {...register("Password", {
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 8,
            message: "Password must be 8 characters long",
          },
        })}
        type="Password" className={styles.input}
      />
      {errors.Password && <p className={styles.p}>{errors.Password.message}</p>}
      <label className={styles.label}>Email:</label>
      <input
        placeholder="Email"
        disabled={isSubmitting}
        {...register("Email", {
          required: { value: true, message: "Email is required" },
        })}
        type="Email" className={styles.input}
      />
      {errors.Email && <p className={styles.p}>{errors.Email.message}</p>}
      {/* include validation with required or other standard HTML validation rules */}
      <button type="submit" disabled={isSubmitting} className={styles.button}>Signup</button>
      {message && <h1 className={styles.h1}>{message}</h1>}
      <Link to='/Login'>I have an account</Link>
    </form>
  );
}


export default Signup
