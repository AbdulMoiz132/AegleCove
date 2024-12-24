import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import {bmi_calc} from '../utilities/helperfunctions.js';
const Bmi = () => {

  const [bmiresutlt, setBmiresult] = useState({
    bmi: null,
    status: null,
  })
  const handlecalc = async (data) => {
    const bmi = bmi_calc(data.Weight, data.Height, data.Age, data.Gender)
    console.log(bmi)
    setBmiresult({
      bmi: bmi.yourbmi,
      status: bmi.message
    });
    console.log(bmiresutlt.bmi)

  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(handlecalc)} className='{styles.bmiForm}'>
        {/* register your input into the hook by invoking the "register" function */}
        
        <h3>Height</h3>
        <input
          placeholder="Height(m)"
          disabled={isSubmitting}
          {...register("Height", {
            required: { value: true, message: "Height is required" },
            pattern: {
              value: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
              message: "Invalid height"
            }
          }
          )}
          type="number"
          step="any"
        />
        {errors.Height && <p >{errors.Height.message}</p>}
        <h3>Weight</h3>
        <input
          placeholder="Weight(kg)"
          disabled={isSubmitting}
          {...register("Weight", {
            required: { value: true, message: "Weight is required" },
            pattern: {
              value: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
              message: "Invalid weight"
            }
          }
          )}
          type="number"
          step="any"
        />
        {errors.Weight && <p >{errors.Weight.message}</p>}
        <h3>Gender</h3>
        <Controller
          name="Gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} id="Gender">
              <option value="" disabled>
                Select an option
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          )}
        />
        <h3>Age</h3>
        <input
          placeholder="Age"
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
        {errors.Age && <p >{errors.Age.message}</p>}
        <button type="submit">Calculate</button>
      </form>

      {bmiresutlt && bmiresutlt.bmi && <p>YourBMI:{bmiresutlt.bmi}</p>}
      {bmiresutlt && bmiresutlt.status && <p>You are:{bmiresutlt.status}</p>}
      {!bmiresutlt && <p>Error..!</p>}

    </div>
  )
}

export default Bmi
