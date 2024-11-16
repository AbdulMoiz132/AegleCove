import React from 'react'
import './liststyle.css'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div className='listtype'>
      <h1>AegleCove Services</h1>

      <nav>
        <ul>
            <li className="listtype1"><Link to='#'>Find Doctor</Link></li> 
            <li className="listtype1"><Link to='#'>Find Pharmacy</Link></li> 
            <li className="listtype1"><Link to='#'>Symptom Analyzer</Link></li> 
            <li className="listtype1"><Link to='#'>Calculate BMI</Link></li> 
            <li className="listtype1"><Link to='#'>Live Well</Link></li> 
            <li className="listtype1"><Link to='#'>Researches</Link></li> 
        </ul>
      </nav>
  </div>
  )
}

export default List
