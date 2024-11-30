import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {


  const footerlinks = [
    { title: 'Home', link: '/' },
    { title: 'Diseases and Conditions', link: '/' },
    { title: 'Medicines', link: '' },
    { title: 'Live Well', link: '' },
    { title: 'Pregnancy Care', link: '' },
    { title: 'Care & Support', link: '' },
    { title: 'BMI Calculator', link: '/bmicalculator' },
    { title: 'COVID-19 Information', link: '' },
    { title: 'Find a Doctor', link: '' },
    { title: 'Symptom Analyzer', link: '' },
    { title: 'Medicine Lookup', link: '' },
    { title: 'Health Research', link: '' },
    { title: 'Create Account', link: '/Signup' },
    { title: 'AegleCove Services', link: '' },
    { title: 'Our Helpline', link: '' },
    { title: 'Our Policies', link: '' },
    { title: 'Our Commitment to Excellence', link: '' },
    { title: 'How AegleCove Works', link: '' },
];

  return (
    <footer className='footer'>

      <Link to='/' className='innerlogo'>AEGLECOVE</Link>
      <div className="footer1">
        <nav className='footernavbars'>
        {footerlinks.map(({ title, link }, index) => (
                        <li className='li' key={index}>
                            <Link to={link} className='list'>{title}</Link>
                        </li>
                    ))}
             
        </nav>
        <p>Copyright AegleCove All Rights Reserved </p>
        </div>

    </footer>
  )
}

export default Footer