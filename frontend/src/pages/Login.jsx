import React from 'react'
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form"
import styles from '../styles/form.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';
import LoginCradential from '../components/LoginCradential';
import Loader from '../components/Loader';
import useAegleCoveStore from '../store/AeglcoveStore';
import PopOut from '../components/PopOut';

function Login() {

  const methods = useForm();
  const { isSubmitting } = methods.formState;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const setUser = useAegleCoveStore((state) => state.setUser);




  const onSubmit = async (data) => {

      console.log(data)
      const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const err = await response.json();
        setMessage(err.message);
        throw new Error(response.statusText);
       
      }
      const result = await response.json();
      console.log(result);
      setUser(result);
      console.log(user);
      <PopOut title="Login Successfull"  />;
      setTimeout(() => {
        navigate(`/dashboard/my`);
      }, 1000);
    };

  return (
    <div className="logincontainer">
      <Logo />
      {isSubmitting && <Loader />}
      <FormProvider{...methods} className={styles.formprovider}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form} disabled={isSubmitting}>
          <h1 className={styles.h1}>LOGIN</h1>
           <LoginCradential />

          <button type="submit" disabled={methods.isSubmitting} className={styles.button}>LOGIN</button>

          {message && <h2 className={styles.h1}>{message}</h2>}

          <Link to='/signup'className={styles.linkto}>I have not an account</Link>
        </form>
      </FormProvider>
      {console.log(isSubmitting)}

    </div>
  );
}
export default Login