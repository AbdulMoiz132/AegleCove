import React from 'react'
import styles from '../styles/dashboard.module.css'
import DashHeader from '../components/DashHeader'
import DashSidemenu from '../components/DashSidemenu'
import { useState,useEffect } from 'react'
import DashCard from '../components/DashCard'
import OnesymptomCard from '../components/OnesymptomCard'
import DashlivewellTodos from '../components/DashlivewellTodos'
import useAegleCoveStore from '../store/AeglcoveStore'

const Dashboard = () => {
    const [showMenu, setShowMenu] = useState(false)
    //err message 
    const [message , setMessage]=useState('');
    const setUser = useAegleCoveStore((state) => state.setUser)
    const user = useAegleCoveStore((state) => state.user)

  
    //sidemenubar function
    const handleonclick = () => {
        setShowMenu(!showMenu);
    }
    const dashboardsection = showMenu?
    `${styles.dashboardsection} ${styles.dashboardsectionExpanded}`:
    `${styles.dashboardsection} ${styles.dashboardsectionCollapsed}`

    //fetching user data 
      const userdata = async () => {
      const response= await fetch(`http/localhost8080/user/${user.id}`);
      if(!response.ok){
        setMessage('User not Found please Login again!');
        throw new Error('Failed to find user');
      }
      const data = response.json();
      setUser(data);

     }
     useEffect(() => {
      if(!user.firstname){
        userdata();
      }
      }, [user.id])


  return (
   <div className='body'>
      <DashHeader showMenu={showMenu} handleonclick={handleonclick} />
      <DashSidemenu showMenu={showMenu} />
      <div className={styles.dashboard}>
      <div className={dashboardsection}>
        <div className={styles.greetUser}>
          <h2>Welcome Back {user.username} 👋</h2>
          <p> We're here to help you manage your health with ease</p>
        </div>
          <div className={styles.bodyTracker}>
           <OnesymptomCard title='BMI' text={'No Record,fill details'}/>
           <OnesymptomCard title="HWR" text={'No Record,fill details'}/>
           <OnesymptomCard title='BFP' text={'No Record,fill details'}/>
           <OnesymptomCard title='WHTR' text={'No Record,fill details'}/>
           <OnesymptomCard title='LBM' text={'No Record,fill details'}/>
           </div>

           <div className={styles.dashmiddleSection}>
           <DashCard title='Recent Health Issues'/>
           <DashlivewellTodos/>
           </div>
        
      </div>
      </div>
      </div>
  )
}

export default Dashboard
