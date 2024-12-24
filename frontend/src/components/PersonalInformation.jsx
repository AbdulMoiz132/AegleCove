import React from 'react'
import { useFormContext,Controller } from 'react-hook-form';
import styles from '../styles/form.module.css';

const PersonalInformation = () => {
    const {
        register,
        formState: { errors},
        handleSubmit,
        control,
      } = useFormContext();
  return (
    <div>
     
        <div className={styles.name_information}>
        <label className={styles.label}>FirstName:</label> {/*firstname label*/}
        <div className={styles.wrapper}>{/*firstname input*/}
        <input  className={styles.input}  
          placeholder="FirstName"
          {...register("firstname", {
            required: { value: true, message: "Firstname is required" },
          }
          )}
          type="text"
        />
        {errors.firstname && <p className={styles.p}>{errors.firstname.message}</p>}
        </div>

        <label className={styles.label}>LastName:</label> {/*lastname input*/}
        <div className={styles.wrapper}>{/*lastname input*/}
        <input  className={styles.input}
          placeholder="LastName"
          {...register("lastname", {
            required: { value: true, message: "Lastname is required" },
          }
          )}
          type="text"
        />
        {errors.lastname && <p className={styles.p}>{errors.lastname.message}</p>}
        </div>
        </div>

        <div className={styles.name_information}>
        <label className={styles.label}>Birthdate:</label>
        <div className={styles.wrapper}>
        <input  className={styles.input}
          placeholder="Birthdate"
          {...register("birthdate", {
            required: { value: true, message: "Birthdate is required" },
          }
          )}
          type="date"
        />
        {errors.birthdate && <p className={styles.p}>{errors.birthdate.message}</p>}
        </div>

        <label className={styles.label}>Gender:</label>
        <div className={styles.wrapper}>
        <Controller  
          name="gender"
          control={control}
          defaultValue=""
          rules={{ required: "Please select an option" }} 
          render={({ field }) => (
            <select {...field} id="gender" className={styles.input}>
              <option value="" disabled>
                Select an option
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="custom">Custom</option>
              <option value="rather not say">Rather Not say</option>
              <option value="others">Others</option>
            </select>
          )}
        />
        {errors.gender&&<p className={styles.p}>{errors.gender.message}</p>}
        </div>
        </div>
    </div>
  )
}

export default PersonalInformation
