import React from 'react'
import { useForm} from "react-hook-form"
import styles from './form.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Form1() {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [message,setmessage]=useState('');
  const onSubmit = async(data) => {
  
    
    try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({data}),
             // Send numbers as JSON
          }).then(response=>response.json())
          .then(data=>{console.log(JSON.stringify(data, null, 4));
            setmessage('Account created Successfully')
          setTimeout(() => {
            setmessage('')
          }, 1000);})

  }catch{}
 } // your form submit function which will invoke after successful validation
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
     <h1 className={styles.h1}>LOGIN</h1>
      {/* register your input into the hook by invoking the "register" function */}
      {isSubmitting && <div>Loading...</div>}
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
      {/* include validation with required or other standard HTML validation rules */}
      <button type="submit" disabled={isSubmitting} className={styles.button}>LOGIN</button>
       {message&&<h1 className={styles.h1}>{message}</h1>}
      <Link to='/Signup'>I have not an account</Link>
    </form>
  );
}


export default Form1
