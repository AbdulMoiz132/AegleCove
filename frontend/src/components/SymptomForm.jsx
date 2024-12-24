import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from '../styles/symptomform.module.css';
import { ImCross } from "react-icons/im";

const symptomsList = [
  "Fever",
  "Cough",
  "Headache",
  "Fatigue",
  "Sore Throat",
  "Runny Nose",
  "Shortness of Breath",
  "Nausea",
  "Vomiting",
  "Diarrhea"
];

const SymptomForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      symptoms: [{ symptom: '' }, { symptom:'' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'symptoms'
  });

  const addSymptom = () => {
    append({ symptom: '' });
  };

  const onSubmit = (data) => {
    const symptomsArray = data.symptoms.map(item => item.symptom);
    console.log(symptomsArray);
  };


  return (
  
    <form className={styles.symptomForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Get Insights on Your Health</h2>
      <div className={styles.formContainer}>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.forminput}
          >

            <button type="button" className={styles.removeButton} onClick={() => remove(index)}><ImCross/></button>
            <label htmlFor={`symptoms[${index}]`} className={styles.symptomlabel}>Symptom</label>
            <select
              id={`symptoms[${index}]`}
              {...register(`symptoms[${index}]`, { required: 'Symptom is required' })}
              className={styles.symptomSelect}
            >
              <option value="">Select a symptom</option>
              {symptomsList.map((symptom, idx) => (
                <option key={idx} value={symptom}>{symptom}</option>
              ))}
              
            </select>
            {errors.symptoms?.[index] && <p className={styles.error}>{errors.symptoms[index].message}</p>}
           
          </div>
        ))}
      </div>
      <button type="button" className={styles.addButton} onClick={addSymptom}>Add More</button>
      <button type="submit" className={styles.submitButton}>Analyze Now</button>
    </form>
  
  );
};

export default SymptomForm;
