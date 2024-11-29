import React from 'react'
import { useForm, Controller  ,FormProvider, useFormContext } from "react-hook-form"
import styles from './form.module.css'
import { Link, Route, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Logo from '../../Logo/Logo';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Login_Cradential from './Login_Cradential';
import Contact_Information from './Contact_Information';
import Personal_Information from './Personal_Information';

function Signup() {
  const methods = useForm();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      setMessage(Error.message)
      throw new Error('Network not responding');
      
    }
    const result = await response.json();
    console.log(result);
    setMessage('Signup Successfully');
    navigate('/login')
    }
  
  return (
    <div className="Container">
      <Logo />
      {isSubmitting &&<Loader/> }
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>

        <h1 className={styles.h1}>SIGN UP</h1>
        {methods.isSubmitting && <div>Loading...</div>}
        <h2 className={styles.h2}>Personal Information</h2>
       <Personal_Information/>
        <hr className={styles.hr} />
        <h2 className={styles.h2}>Contact Information</h2>
        <Contact_Information/>
        <hr className={styles.hr} />
        <h2 className={styles.h2}>Login Credentials</h2>
       <Login_Cradential/>
        <button type="submit" disabled={methods.isSubmitting} className={styles.button}>Signup</button>
        {message && <h1 className={styles.h1}>{message}</h1>}
        <Link to='/login'>I have an account</Link>
      </form>
      </FormProvider>
    </div>
  );
}


export default Signup
