import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {


  const footerlinks=[
    {title:'Home',link:'/'},
    {title:'Health',link:'/'},
    {title:'Dieases',link:''},
    {title:'Live well',link:''},
    {title:'Pregrency',link:''},
    {title:'Care&Support',link:''},
    {title:'BMI Calculator',link:''},
    {title:'COVID_19',link:''},
    {title:'Find Doctor',link:''},
    {title:'Symptom Analyzer',link:''},
    {title:'Medicine Lookup',link:''},
    {title:'Researches',link:''},
    {title:'Create Account',link:'/Signup'},
    {title:'AegleCove Services',link:''},
    {title:'Our Helpline',link:''},
    {title:'Our Policies',link:''},
    {title:'How we improve',link:''},
    {title:'AegleCove Works',link:''},
    

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