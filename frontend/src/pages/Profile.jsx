import React, { useState } from 'react';
import useAegleCoveStore from '../store/AeglCoveStore';
import styles from '../styles/profile.module.css';

const Profile = () => {
  const user = useAegleCoveStore((state) => state.user);
  const setUser = useAegleCoveStore((state) => state.setUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className={styles.profilePage}>
      <h1 className={styles.profileTitle}>Profile</h1>
      <div className={styles.profileDetails}>
        {isEditing ? (
          <>
            <label>
              First Name:
              <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
            </label>
            <label>
              Birthdate:
              <input type="date" name="birthdate" value={formData.birthdate} onChange={handleInputChange} />
            </label>
            <label>
              Weight (kg):
              <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} />
            </label>
            <label>
              Height (cm):
              <input type="number" name="height" value={formData.height} onChange={handleInputChange} />
            </label>
            <label>
              Contact:
              <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>First Name:</strong> {user.firstname}</p>
            <p><strong>Last Name:</strong> {user.lastname}</p>
            <p><strong>Birthdate:</strong> {user.birthdate}</p>
            <p><strong>Age:</strong> {calculateAge(user.birthdate)}</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
            <p><strong>Height:</strong> {user.height} cm</p>
            <p><strong>Contact:</strong> {user.contact}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
