import React from 'react'
import styles from '../styles/dashsidebar.module.css'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { TbAnalyzeFilled } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { TbReportMedical } from "react-icons/tb";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import useAegleCoveStore from '../store/AegleCoveStore.js';
import useAuthStore from '../store/Authstore.js';
const DashSidemenu = ({showMenu}) => { 
  const sideMenu = showMenu
  ? `${styles.sideMenu} ${styles.sideMenuExpanded}`
  : `${styles.sideMenu} ${styles.sideMenuCollapsed}`;

const linkHeading = showMenu
  ? `${styles.linkHeading} ${styles.linkHeadingExpanded}`
  : `${styles.linkHeading} ${styles.linkHeadingCollapsed}`;

const sideMenulist=showMenu
  ? `${styles.sideMenulist} ${styles.sideMenulistExpanded}`
  : `${styles.sideMenulist} ${styles.sideMenulistCollapsed}`;

const LinkBtn = showMenu
  ? `${styles.LinkBtn} ${styles.LinkBtnExpanded}`
  : `${styles.LinkBtn} ${styles.LinkBtnCollapsed}`;

const reset =  useAegleCoveStore((state) => state.resetUser);
const logouts = useAuthStore ((state) => state.logout);
// reset all data when user logs out
const logout=async()=>{
   reset();
   logouts();
}
  return (
    <div className={styles.container}>
      <div className={sideMenu}>
        <Link to='/dashboard/my' className={LinkBtn}><li className={sideMenulist}><IoHome className={styles.sidebar_Icon} /><h2 className={linkHeading}>Dashboard</h2></li></Link>
        <Link to='/dashboard/symptomanalyzer' className={LinkBtn}><li className={sideMenulist}>< TbAnalyzeFilled className={styles.sidebar_Icon} /><h2 className={linkHeading}>Symptom Analyzer</h2></li></Link>
        <Link to='/medicalrecords' className={LinkBtn}><li className={sideMenulist}><TbReportMedical className={styles.sidebar_Icon} /><h2 className={linkHeading}>Health Records</h2></li></Link>
        <Link to='/profile' className={LinkBtn}><li className={sideMenulist}>< FaCircleUser className={styles.sidebar_Icon} /><h2 className={linkHeading}>Profile</h2></li></Link>
        <Link to='/help' className={LinkBtn}><li className={sideMenulist}><IoMdHelpCircle className={styles.sidebar_Icon} /><h2 className={linkHeading}>Help</h2></li></Link>
        <Link to='/login' onClick={logout} className={LinkBtn}><li className={sideMenulist}><RiLogoutBoxFill className={styles.sidebar_Icon} /><h2 className={linkHeading}>Logout</h2></li></Link>
      </div>
    </div>

  )

}

export default DashSidemenu
