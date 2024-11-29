import React from 'react'
import { useForm, Controller  ,FormProvider, useFormContext } from "react-hook-form"
import styles from './form.module.css'
import { Link, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    }).then(response => response.json())
      .then(responsedata => {
        console.log(JSON.stringify(responsedata));
        setMessage('Account created Successfully')
        setTimeout(() => {
          setMessage('')
          navigate("/login");
        }, 1000);
      }).catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="Container">
      <Logo />
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
