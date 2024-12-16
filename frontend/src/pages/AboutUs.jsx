import React from 'react'
import Logo from '../components/Logo'
import styles from '../styles/aboutus.module.css'
import SlideroverlayCard from '../components/SlideroverlayCard'
const AboutUs = () => {
    return (
        <div className={styles.aboutus}>
            <Logo />
            <div className={styles.intro}>
            <h1 className={styles.h1}>About Us</h1>

            <h2 className={styles.h2}>Welcome to Aegle Cove</h2>
            <p className={styles.p}>Aegle Cove is your comprehensive healthcare companion, designed to simplify and enhance your healthcare experience. Our mission is to provide personalized health insights, treatment options, and seamless access to medical resources, empowering individuals to take charge of their health with confidence</p>

            <h2 className={styles.h2}>Our Mission</h2>
            <p className={styles.p}>At Aegle Cove, we aim to bridge the gap between patients and healthcare services by combining advanced technology with a user-friendly interface. We believe that everyone deserves access to reliable medical information and efficient healthcare management tools. Our goal is to:</p>
            
                <li>Offer accurate and personalized health analysis.</li>
                <li>Connect patients with the right doctors and hospitals.</li>
                <li>Connect patients with the right doctors and hospitals.</li>
                <li>Promote a healthier, more informed community</li>
            
            </div>
            <hr/>
             <div className={styles.services}>
            <h2 className={styles.h2}>What We Offer Now</h2>
           
                <li>Symptom Analyzer</li>
                <li>Diseases Directory</li>
                <li>Medicines Directory</li>
                <li>Patient Accounts</li>
                <li>Nearby Resources</li>
                <li>Path to manage your health</li>
                <li>BMI Calculator</li>
           
            </div>
            <hr/>
            <div className="plans">
            <h2>Our Future Plans</h2>
       
                <li>AegleCove Health AI</li>
                <li>Doctors Account</li>
                <li>AegleCove Mobile App</li>
                <li>Hospital Management</li>
                <li>Research Works</li>
                <li>Live 3D models Demonstration</li>
          
            </div>
            <hr/>
            <div className="aim">
            <h2>Our AIM</h2>
            <p>We envision a world where healthcare is accessible to everyone, anywhere, at any time. By leveraging technology, Aegle Cove strives to make healthcare management simple, efficient, and stress-free for all users.</p>

            <h2>Contact Us</h2>
            <p>We would love to hear from you! Whether you have feedback, questions, or suggestions, feel free to reach out to us.</p>
            <li>Email: <a href='mailto:AegleCove@outlook.com'>Info@AegleCove.com</a></li>
            <li>Phone: +1-234-567-8900</li>
            </div>
            <SlideroverlayCard/>
        </div>
    )
}

export default AboutUs
