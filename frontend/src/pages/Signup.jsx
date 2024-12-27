import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import styles from '../styles/form.module.css'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';
import Loader from '../components/Loader';
import "react-phone-number-input/style.css";
import LoginCradential from '../components/LoginCradential';
import ContactInformation from '../components/ContactInformation';
import PersonalInformation from '../components/PersonalInformation';


function Signup() {
  const methods = useForm();
  const { isSubmitting } = methods.formState;
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
      setMessage('');
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const err = await response.json();
        setMessage(err.message);
        throw new Error('Network not responding');
       
      }
      const result = await response.json();
      console.log(result);
      <PopOut title="Signup Successfull"  />;
      setTimeout(() => {
        navigate('/login')
      }, 1000);
      
    
  }

  return (
    <div className="Container">
      <Logo />
      {isSubmitting && <Loader />}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
          <h1 className={styles.h1}>SIGN UP</h1>
          {methods.isSubmitting && <div>Loading...</div>}
          <h2 className={styles.h2}>Personal Information</h2>
          <PersonalInformation />
          <hr className={styles.hr} />
          <h2 className={styles.h2}>Contact Information</h2>
          <ContactInformation />
          <hr className={styles.hr} />
          <h2 className={styles.h2}>Login Credentials</h2>
          <LoginCradential />
          <button type="submit" disabled={methods.isSubmitting} className={styles.button}>Signup</button>
          {message && <h2 className={styles.h2}>{message}</h2>}
          <Link to='/login' className={styles.linkto}>I have an account</Link>
        </form>
      </FormProvider>
    </div>
  );
}


export default Signup
