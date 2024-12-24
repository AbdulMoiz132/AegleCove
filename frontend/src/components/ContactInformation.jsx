import React from 'react'
import { useFormContext,Controller } from 'react-hook-form'
import styles from '../styles/form.module.css'
import PhoneInput from "react-phone-number-input";

const ContactInformation = () => {

    const {
        register,
        formState: { errors},
        handleSubmit,
        control,
      } = useFormContext();
  return (
    <div>
    <div className={styles.name_information}>
        <label className={styles.label}>Email:</label>
        <div className={styles.wrapper}>
        <input  className={styles.input}
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
          type="Email"
        />
        {errors.email && <p className={styles.p}>{errors.email.message}</p>}
        </div>

        <label className={styles.label}>Phone Number:</label>
        <div className={styles.wrapper}>
        <Controller 
        name="contact"
        control={control} // Linking React Hook Form to this field
        defaultValue=""
        rules={{
          required: "Phone number is required",
         
        }}
        render={({ field  }) => (
          <PhoneInput className={styles.input}
            {...field } 
            placeholder="Enter phone number"
            country="PK" 
          />
        )}

      />
      {errors.contact && <p className={styles.p}>{errors.contact.message}</p>}
      </div>
      </div>

      <div className={styles.name_information}>
        <label className={styles.label}>Full Address:</label>
        <div className={styles.wrapper}>
        <input className={styles.input}
          placeholder="Address"
          {...register("address", {
            required: { value: true, message: "Address is required" },
          }
          )}
          type="text"
        />
        {errors.address&&<p className={styles.p}>{errors.address.message}</p>}
        </div>
        </div>
        </div>
      
  )
}

export default ContactInformation
