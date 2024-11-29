import React from 'react'
import {  useForm, Controller  ,FormProvider, useFormContext } from "react-hook-form"
import styles from './form.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Logo from '../../Logo/Logo';
import Login_Cradential from './Login_Cradential';
import Loader from '../../loader/Loader';


function Login() {
 
  const methods=useForm();
  const { isSubmitting } = methods.formState;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
  
    try{
      setMessage('');
      const response= await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        header:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    //
    if (!response.ok) {
      setMessage('Server not Responding');
      throw new Error(response.statusText);
    }
    const responsedata = await response.json();
    console.log(responsedata);
    setMessage('Login Successfully');
    // Clear the success message after 1 second
    setTimeout(() => {
      setMessage('');
      navigate(`/dashboard/${data.username}`)
    }, 1000);
  } catch (error) {
    console.error("Error during login:", error);
    setMessage('Server not Responding');
  }

};

useEffect(() => {
  setMessage('')
}, [])


return (
  <div className="container">
    <Logo />
    {isSubmitting &&<Loader/> }
    <FormProvider{...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}  disabled={isSubmitting}>
      <h1 className={styles.h1}>LOGIN</h1>
      <Login_Cradential/>
     
      <button type="submit" disabled={methods.isSubmitting} className={styles.button}>LOGIN</button>
      
      {message && <h1 className={styles.h1}>{message}</h1>}
      
      <Link to='/signup'>I have not an account</Link>
   </form>
    </FormProvider>
  {console.log(isSubmitting)}
  
  </div>
);
}
export default Login
