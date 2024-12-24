import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from '../styles/medicalrecordform.module.css';

const diseaseTypes = [
  "Viral",
  "Chronic",
  "Fungal",
  "Bacterial",
  "Parasitic",
  "Genetic",
  "Autoimmune",
  "Other"
];

const MedicalRecordForm = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      medications: [{ medicineName: '', dosage: '', timing: '' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'medications'
  });

  const addMedication = () => {
    append({ medicineName: '', dosage: '', timing: '' });
  };

  return (
    <form className={styles.medicalRecordForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Medical Record Form</h2>

      <div className={styles.formGroup}>
        <label htmlFor="diseaseName">Disease Name</label>
        <input
          id="diseaseName"
          type="text"
          className={styles.inputField}
          {...register('diseaseName', { required: 'Disease name is required' })}
        />
        {errors.diseaseName && <p className={styles.error}>{errors.diseaseName.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="diseaseType">Type of Disease</label>
        <select id="diseaseType" className={styles.selectField} {...register('diseaseType', { required: 'Disease type is required' })}>
          <option value="">Select type of disease</option>
          {diseaseTypes.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>
        {errors.diseaseType && <p className={styles.error}>{errors.diseaseType.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>Medications</label>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.medicationGroup}>
            <input
              type="text"
              placeholder="Medicine Name"
              className={styles.inputField}
              {...register(`medications[${index}].medicineName`, { required: 'Medicine name is required' })}
            />
            <input
              type="text"
              placeholder="Dosage"
              className={styles.inputField}
              {...register(`medications[${index}].dosage`, { required: 'Dosage is required' })}
            />
            <input
              type="text"
              placeholder="Timing"
              className={styles.inputField}
              {...register(`medications[${index}].timing`, { required: 'Timing is required' })}
            />
            <button type="button" className={styles.removeButton} onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className={styles.addButton} onClick={addMedication}>Add More</button>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="doctorVisits">Number of Visits to Doctor</label>
        <input
          id="doctorVisits"
          type="number"
          className={styles.inputField}
          {...register('doctorVisits', { required: 'Number of visits is required' })}
        />
        {errors.doctorVisits && <p className={styles.error}>{errors.doctorVisits.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default MedicalRecordForm;
