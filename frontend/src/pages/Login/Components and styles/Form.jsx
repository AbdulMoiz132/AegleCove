import React from 'react'
import { Link } from 'react-router-dom'
import styles from './form.module.css'
import { useState } from 'react'

function Form() {


  const [userdata, setusersdata] = useState({
    Email: '',
    Password: '',
    username: '',
  })
  const updateFormData = async (newData) => {
    return new Promise((resolve) => {
      setusersdata((prevData) => {
        const updatedData = { ...prevData, ...newData };
        setTimeout(() => {
          
         console.log('done'); 
        }, 10000);
        resolve(updatedData);
        return updatedData;
      });
    });
  };
  const handlechange=async(e)=>{
    const {name,value}=e.target;
    //  setusersdata((data) => ({
    //   ...data, // ... spread operator makes it easy to  update specific properties of userdata object.
    // [name]: value, // [name] is used to dynamically update the property of userdata object
    // }))

    const updateddata= await updateFormData({[name]:value})
    console.log(updateddata)
    
  }
  // handlesubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await fetch('url', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({userdata}),
  //        // Send numbers as JSON
  //     });
  //   }catch{
  }
   
  return (
      <div className={styles.Form}>
        <form className={styles.form}>
          <label className={styles.label} >Email:</label>
          <input onChange={handlechange} type='Email' name='Email' placeholder='Email' className={styles.input} required ></input>
          <label className={styles.label} >Username:</label>
          <input onChange={handlechange}  type='text' name='username' placeholder='Username' className={styles.input} required></input>
          <label className={styles.label}>Password:</label>
          <input onChange={handlechange}  type='Password' placeholder='Password' name='Password' className={styles.input} required></input>
        </form>
      </div>
    )
  }

  export default Form
