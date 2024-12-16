import React from 'react'
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form"
import styles from '../styles/form.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';
import LoginCradential from '../components/LoginCradential';
import Loader from '../components/Loader';

function Login() {

  const methods = useForm();
  const { isSubmitting } = methods.formState;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {

      setMessage('');
      console.log(data)
      const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setMessage('Invalid');
        throw new Error(response.statusText);
      }
      setMessage('Login Successfully');
      setTimeout(() => {
        setMessage('');
        navigate(`/dashboard/${data.username}`)
      }, 1000);
    };

  return (
    <div className="container">
      <Logo />
      {isSubmitting && <Loader />}
      <FormProvider{...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form} disabled={isSubmitting}>
          <h1 className={styles.h1}>LOGIN</h1>
          <LoginCradential />

          <button type="submit" disabled={methods.isSubmitting} className={styles.button}>LOGIN</button>

          {message && <h1 className={styles.h1}>{message}</h1>}

          <Link to='/signup'className={styles.linkto}>I have not an account</Link>
        </form>
      </FormProvider>
      {console.log(isSubmitting)}

    </div>
  );
}
export default Login