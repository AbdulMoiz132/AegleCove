import React from 'react'
import {  useForm, Controller  ,FormProvider, useFormContext } from "react-hook-form"
import styles from './form.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../Logo/Logo';
import Login_Cradential from './Login_Cradential';
import Loader from '../../loader/Loader';


function Login() {
 
  const methods=useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
  fetch(`http://localhost:8080/auth/signin/${data}`, {
    }).then(response => {
      if (!response.ok) {
        setMessage('Server not Responding')
        throw new Error(response.statusText);
       
      }
      response.json()
    })
      .then(responsedata => {
        console.log(JSON.stringify(responsedata));
        setMessage('Login Successfully')
        setTimeout(() => {
          setMessage('')
        }, 1000);
      })
    }
return (
  <div className="container">
    <Logo />
    <FormProvider{...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.h1}>LOGIN</h1>
      {methods.isSubmitting &&<Loader/> }
      <Login_Cradential/>
      <button type="submit" disabled={methods.isSubmitting} className={styles.button}>LOGIN</button>
      {message && <h1 className={styles.h1}>{message}</h1>}
      <Link to='/signup'>I have not an account</Link>
   </form>
    </FormProvider>
  </div>
);
}
export default Login
