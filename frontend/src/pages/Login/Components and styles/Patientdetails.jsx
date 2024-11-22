import React from 'react'
import { useForm,Controller} from "react-hook-form"


const Patientdetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
      } = useForm();

      const Gender=[
        'Male','Female','Other'
      ]

      const adddetails=async(data)=>{

        try{
            const response = await fetch('http://localhost:8080/auth/signup',{
             method:'POST',
             headers:{
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({data}),

            }).then(response=>response.json())
            .then(data=>{
                console.log(JSON.stringify(data, null, 4));
                alert("Data Added Successfully");

            })

        }catch(error){console.log(error)}
      }
  return (
    <div>
        <form onSubmit={handleSubmit(adddetails)}>
     <h1 >LOGIN</h1>
      {/* register your input into the hook by invoking the "register" function */}
      {isSubmitting && <div>Loading...</div>}
      <h3>Name</h3>
      <input
        placeholder="FirstName"
        disabled={isSubmitting}
        {...register("FirstName", {
          required: { value: true, message: "Firstname is required" },
        }
        )}
        type="text"
      />
            
    {errors.Firstname && <p >{errors.Firstname.message}</p>}
      <input
        placeholder="LastName"
        disabled={isSubmitting}
        {...register("LastName", {
          required: { value: true, message: "Lastname is required" },
        }
        )}
        type="text"
      />
       {errors.Lastname && <p >{errors.Lastname.message}</p>}

      <h3>Gender</h3>
      <Controller
          name="dropdown"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} id="dropdown">
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
      {/* {Gender.map((gender, index) => (
        <label key={index}>
          <input
            type="radio"
            value={gender.toLowerCase()}
            {...register('gender', { required:{value:true,message: 'Please select a gender.'} })}
          />
          {gender}
        </label>
      ))}
      {errors.gender&&<p >{errors.gender.message}</p>}
       */}
      <h3>Age</h3>
      <input
      placeholder="Age
      "
      disabled={isSubmitting}
      {...register("Age", {
        required: { value: true, message: "Age is required" },
        pattern: {
            value: /^[0-9]+$/,
            message: "Invalid age"
            },
            }
            )}
            type="number"
            />
            {errors.Age&&<p >{errors.Age.message}</p>}
            
            <h3>Phone Number</h3>
            
            <input
            placeholder="Phone Number"
            
            disabled={isSubmitting}
            
            {...register("Phone Number", {
                required: { value: true, message: "Phone Number is required" },
                pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                    },
                    }
                    )}
                    type="number"
                    />
                    {errors["Phone Number"]&&<p >{errors["Phone Number"].
                    message}</p>}
     
      {/* include validation with required or other standard HTML validation rules */}
      <button type="submit" disabled={isSubmitting}>LOGIN</button>
       {/* {message&&<h1 className={styles.h1}>{message}</h1>} */}
   
    </form>
    </div>
  )
}

export default Patientdetails