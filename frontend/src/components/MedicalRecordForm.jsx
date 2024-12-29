import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from '../styles/medicalrecordform.module.css';
import useAegleCoveStore from '../store/AegleCoveStore';

const MedicalRecordForm = () => {
  const diseaseTypes = ['Infectious', 'Chronic', 'Autoimmune', 'Genetic', 'Degenerative'];
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      medicines: [''],
    },
  });

  const setUser = useAegleCoveStore((state) => state.setUser);
  const user = useAegleCoveStore((state) => state.user);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'medicines',
  });

  const addMedication = () => {
    append('');
  };

  const handleMedicalRecordSubmit = async (data) => {
    try {
      const newRecord = {
        diseasename: data.diseasename,
        type: data.type,
        medicines: data.medicines, // Now storing as an array of names
      };

      const updatedMedicalHistory = [...(user.medical_history || []), newRecord];
      const updatedUser = { ...user, medical_history: updatedMedicalHistory };

      setUser(updatedUser);

      const response = await fetch('http://localhost:8080/user/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Failed to submit medical record');
      }

      await response.json();
      alert('Record Updated Successfully');
    } catch (error) {
      console.error('Error submitting medical record:', error);
    }
  };

  return (
    <form className={styles.medicalRecordForm} onSubmit={handleSubmit(handleMedicalRecordSubmit)}>
      <h2 className={styles.formTitle}>Medical Record Form</h2>

      <div className={styles.formGroup}>
        <label htmlFor="diseasename">Disease Name</label>
        <input
          id="diseasename"
          type="text"
          className={styles.inputField}
          {...register('diseasename', { required: 'Disease name is required' })}
        />
        {errors.diseasename && <p className={styles.error}>{errors.diseasename.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="type">Type of Disease</label>
        <select id="type" className={styles.selectField} {...register('type', { required: 'Disease type is required' })}>
          <option value="">Select type of disease</option>
          {diseaseTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        {errors.type && <p className={styles.error}>{errors.type.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>Medicines</label>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.medicationGroup}>
            <input
              type="text"
              placeholder="Medicine Name"
              className={styles.inputField}
              {...register(`medicines.${index}`, { required: 'Medicine name is required' })}
            />
            <button type="button" className={styles.removeButton} onClick={() => remove(index)}>Remove</button>
            {errors.medicines?.[index] && (
              <p className={styles.error}>{errors.medicines[index].message}</p>
            )}
          </div>
        ))}
        <button type="button" className={styles.addButton} onClick={addMedication}>Add More</button>
      </div>

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default MedicalRecordForm;
