import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import styles from '../styles/form.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import LoginCradential from '../components/LoginCradential';
import Loader from '../components/Loader';
import useAegleCoveStore from '../store/AegleCoveStore.js';
import useAuthStore from '../store/Authstore.js';
import PopOut from '../components/PopOut';

function Login() {
  const methods = useForm();
  const { isSubmitting } = methods.formState;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showPopOut, setShowPopOut] = useState(false);
  const setUser = useAegleCoveStore((state) => state.setUser);
  const resetuser = useAegleCoveStore((state) => state.resetUser);
  const login = useAuthStore ((state) => state.login);
  const logout = useAuthStore ((state) => state.logout);

  const onSubmit = async (data) => {
    try {
      resetuser();
      logout();
      const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.message);
        return;
      }
      const userid = { id:result.message , username:data.username , password:data.password};
      console.log(data)
      console.log(result.message);
      setUser(userid);
      login();
      setTimeout(() => {
        navigate(`/dashboard/my`);
      }, 2000);
    } catch (error) {
      setMessage('Network error. Please try again later.');
      console.log(error);
    }
  };

  return (
    <div className="logincontainer">
      <Logo />
      {isSubmitting && <Loader />}
      <FormProvider {...methods} className={styles.formprovider}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form} disabled={isSubmitting}>
          <h1 className={styles.h1}>LOGIN</h1>
          <LoginCradential />
          <button type="submit" disabled={methods.isSubmitting} className={styles.button}>LOGIN</button>
          {message && <h2 className={styles.h1}>{message}</h2>}
          <Link to='/signup' className={styles.linkto}>I have not an account</Link>
        </form>
      </FormProvider>
      {showPopOut && <PopOut title="Login Successful" message="You will be redirected shortly." />}
    </div>
  );
}

export default Login;