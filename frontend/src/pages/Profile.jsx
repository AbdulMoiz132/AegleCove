  import React, { useState } from 'react';
  import { useForm, FormProvider } from 'react-hook-form';
  import useAegleCoveStore from '../store/AegleCoveStore.js';
  import styles from '../styles/profile.module.css';
  import { calculateAge } from '../utilities/helperfunctions';
  import PersonalInformation from '../components/PersonalInformation';
  import ContactInformation from '../components/ContactInformation';
  import DashHeader from '../components/DashHeader';
  import DashSidemenu from '../components/DashSidemenu';
  import BodyMetricsForm from '../components/BodyMetricsForm.jsx';

  const Profile = () => {
    const user = useAegleCoveStore((state) => state.user);
    const setUser = useAegleCoveStore((state) => state.setUser);
    const [isEditing, setIsEditing] = useState(false);
    const excludedKeys = ['patient_bodytrack','medical_history'];

    const filteredUser = Object.fromEntries(
      Object.entries(user).filter(([key]) => !excludedKeys.includes(key))
    );

    const methods = useForm({
      defaultValues: { ...filteredUser}
    });
    const age = calculateAge(user.birthdate);

    const beforeupdate = user;
    const handleSave = async (data) => {
      console.log(data)
      setUser(data)
      const response = await fetch('http://localhost:8080/user/update', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.message)
        console.log(result.message);
        setUser(beforeupdate)
        return;
      }
      alert('Profile updated successfully');
      setIsEditing(false);
    };

    return (
      <div className={styles.profilePage}>
        <DashHeader />
        <div className={styles.content}>
          <DashSidemenu />
          <div className={styles.mainContent}>
            <h1 className={styles.profileTitle}>Profile</h1>
            <div className={styles.profileDetails}>
              {isEditing ? (
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(handleSave)} className={styles.form}>
                    <h2 className={styles.sectionTitle}>Personal Information</h2>
                    <PersonalInformation />
                    <h2 className={styles.sectionTitle}>Contact Information</h2>
                    <ContactInformation />
                    <h2 className={styles.sectionTitle}>Metrics Information</h2>
                    <BodyMetricsForm />
                    <button type="submit" className={styles.saveButton}>Save</button>
                  </form>
                </FormProvider>
              ) : (
                <div>
                  <p className={styles.profilDetails_p}><strong>First Name:</strong> {user.firstname}</p>
                  <p className={styles.profilDetails_p}><strong>Last Name:</strong> {user.lastname}</p>
                  <p className={styles.profilDetails_p}><strong>Birthdate:</strong> {user.birthdate}</p>
                  <p className={styles.profilDetails_p}><strong>Age:</strong> {age}</p>
                  <p className={styles.profilDetails_p}><strong>Weight:</strong> {user.weight} kg</p>
                  <p className={styles.profilDetails_p}><strong>Height:</strong> {user.height} cm</p>
                  <p className={styles.profilDetails_p}><strong>Contact:</strong> {user.contact}</p>
                  <p className={styles.profilDetails_p}><strong>Email:</strong> {user.email}</p>
                  <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;
