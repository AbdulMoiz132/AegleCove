import React, { useState, useEffect } from 'react';
import styles from '../styles/dashboard.module.css';
import DashHeader from '../components/DashHeader';
import DashSidemenu from '../components/DashSidemenu';
import DashCard from '../components/DashCard';
import OnesymptomCard from '../components/OnesymptomCard';
import useAegleCoveStore from '../store/AegleCoveStore.js';
import { bmi_calc_simple, calculateBFP, calculateLBM, calculateAge, calculateIBW } from '../utilities/helperfunctions';
import UserMetricsChart from '../components/UserMetricsChart.jsx';

const Dashboard = () => {

  const [showMenu, setShowMenu] = useState(false);
  const setUser = useAegleCoveStore((state) => state.setUser);
  const user = useAegleCoveStore((state) => state.user);
  const setBodyTracker = useAegleCoveStore((state) => state.setPatientBodytrack);
  const message = 'No Record, fill details';


  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };

  
  const dashboardSection = showMenu
    ? `${styles.dashboardsection} ${styles.dashboardsectionExpanded}`
    : `${styles.dashboardsection} ${styles.dashboardsectionCollapsed}`;


  const calculateBodyTrack = () => {
    if (user.height && user.weight) {
      const bmi = bmi_calc_simple(user.weight, user.height);
      const age = calculateAge(user.birthdate);
      const bfp = calculateBFP(user.weight, user.height, age, user.gender);
      const lbm = calculateLBM(user.weight, bfp);
      const ibw = calculateIBW(user.height, user.gender);

      const bodyTrack = {
        bmi: bmi.toFixed(3),
        bfp: bfp.toFixed(3),
        ibw: ibw.toFixed(3),
        lbm: lbm.toFixed(3),
      };

      setBodyTracker(bodyTrack); 
      setUser({ ...user, patient_bodytrack: bodyTrack }); 
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/${user.id}`);
      if (!response.ok) {
        throw new Error('Failed to find user');
      }
      const data = await response.json();

      // Set user data
      const updatedUser = {
        firstname: data.firstname,
        lastname: data.lastname,
        birthdate: data.birthdate,
        email: data.email,
        gender: data.gender,
        contact: data.contact,
        address: data.address,
        weight: data.weight,
        height: data.height,
        medical_history:data.medical_history,
      };

      setUser(updatedUser); 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (!user.firstname) {
      fetchUserData(); 
    }
  }, [user.id]); 


  useEffect(() => {
    if (user.firstname && user.height && user.weight) {
      calculateBodyTrack();
    }
  }, [user.firstname, user.height, user.weight]); 

  return (
    <div className='body'>
      <DashHeader showMenu={showMenu} handleonclick={handleOnClick} />
      <DashSidemenu showMenu={showMenu} />
      <div className={styles.dashboard}>
        <div className={dashboardSection}>
          <div className={styles.greetUser}>
            <h2>Welcome Back {user.firstname} 👋</h2>
            <p>We're here to help you manage your health with ease</p>
          </div>
          <div className={styles.bodyTracker}>
            <OnesymptomCard title='Body Mass Index' text={user.patient_bodytrack?.bmi || message} />
            <OnesymptomCard title='Ideal Body Weight' text={user.patient_bodytrack?.ibw || message} />
            <OnesymptomCard title='Body Fat Percentage' text={user.patient_bodytrack?.bfp || message} />
            <OnesymptomCard title='Lean Body Mass' text={user.patient_bodytrack?.lbm || message} />
          </div>
          <div className={styles.dashmiddleSection}>
            <DashCard title='Recent Health Issues' />
            <UserMetricsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
