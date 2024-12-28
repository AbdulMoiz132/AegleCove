import React from 'react';
import DashHeader from '../components/DashHeader';
import DashSidemenu from '../components/DashSidemenu';
import styles from '../styles/help.module.css';
import useAegleCoveStore from '../store/AegleCoveStore';

const Help = () => {
    const user = useAegleCoveStore ((state) => state.user);
  return (
    <div className={styles.helpPage}>
      <DashHeader />
      <div className={styles.content}>
        <DashSidemenu />
        <div className={styles.mainContent}>
          <h1>Help & Support</h1>
          <p>Hey, {user.firstname} {user.lastname} if you need assistance or have any questions, please follow the steps below:</p>
          <ol>
            <li>Check our <a href="/faq">FAQ page</a> for common questions and answers.</li>
            <li>If you can't find the answer, feel free to contact our support team.</li>
            <li>Send an email to <a href="mailto:support@aeglecove.com">support@aeglecove.com</a> with your query.</li>
            <li>Provide as much detail as possible to help us assist you better.</li>
          </ol>
          <p>We are here to help you with any issues or questions you may have. Our support team will get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
