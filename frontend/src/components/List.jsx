import React from 'react'
import '../styles/liststyle.css'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div className='listtype'>
      <h1>AegleCove Services</h1>
    
      <nav>
        <ul>
            <Link to='/finddoctor' className="listlink"><li className="listtype1">Find Doctor</li> </Link>
            <Link to='/findpharmacy' className="listlink"><li className="listtype1">Find Pharmacy</li></Link> 
            <Link to='/symptomanalyzer' className="listlink"><li className="listtype1">Symptom Analyzer</li> </Link>
            <Link to='/bmicalculator' className='listlink'> <li className="listtype1">Calculate BMI</li> </Link>
            <Link to='/comingsoon' className="listlink"><li className="listtype1">Live Well</li> </Link>
            <Link to='/comingsoon' className="listlink"><li className="listtype1">Researches</li></Link> 
        </ul>
      </nav>
  </div>
  ) 
}

export default List
