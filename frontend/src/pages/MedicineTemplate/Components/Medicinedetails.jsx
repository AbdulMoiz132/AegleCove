import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Logo from '../../Logo/Logo'

function Medicinedetails() {
  const { name } = useParams();
  const navigate = useNavigate();


  // const data = {
  //   name: 'Panadol',
  //   Formula: 'C8H9NO2',
  //   Dosage: [
  //     {
  //       title: 'adults',
  //       value: '500-1000 mg every 4-6 hours as needed, not exceeding 4000 mg per day'
  //     },
  //     {
  //       title: 'children',
  //       value: '10-15 mg/kg every 4-6 hours as needed, not exceeding 5 doses in 24 hours'
  //     },

  //   ],
    
  //   SideEffects: [
  //     'Nausea',
  //     'Rash',
  //     'Liver damage (in case of overdose)',
  //     'Allergic reactions (rare)'
  //   ],
  //   Precautions: 'Avoid exceeding the recommended dosage to prevent liver damage. Consult a doctor if pregnant, breastfeeding, or if you have liver disease.',
  //   Uses: [
  //     'Relief of mild to moderate pain',
  //     'Reduction of fever',
  //     'Treatment of headaches, muscle aches, and colds'
  //   ],
  //   storage: 'Store below 25°C (77°F) in a cool, dry place away from sunlight.',
  //   Alternatives: [
  //     'Crocin',
  //     'Tylenol',
  //     'Paracip'
  //   ],
  //   brand_name: 'GSK (GlaxoSmithKline)'
  // };


  const fetchmedicine = async () => {
    try {
      const response = await fetch(`https://example.com/api/medicine/${name}`)
      const data = await response.json()
      setdata(data);
      console.log(data)
    } catch (error) {
      navigate('*')
      console.error(error)
    }

  }
  const [data , setdata]=useState({});
  useEffect(() => {
    fetchmedicine();
  },[])
  
  return (
    <div>
      <Logo/>
      <h1>{data.name}</h1>
      <h2>{data.Formula}</h2>
      {/* <h4>Dosage</h4>
      {data.Dosage.map((ages, index) => (
        <strong key={index}>
          <li>{ages.title}: {ages.value}</li><br />
        </strong>
      ))} */}
      <h4>UseIn</h4>
      {data.Uses?.map((uses, index) => {
        console.log(uses);
        return<strong key={index}>{uses}<br /></strong>
      })}
      <h4>SideEffects</h4>
      {data?.SideEffect?.map((sideeffects, index) => {
        return<strong key={index}><li>{sideeffects}</li><br /></strong>
      })}
      <h4>Precautions</h4>
      <p>{data.Precautions}</p>
      <h4>Storage</h4>
      <p>{data.Precautions}</p>
      {/* <h4>Alternatives</h4>
      {data.Alternatives.map((Alternative, index) => {
       return <strong key={index}><li>{Alternative}</li><br /></strong>
      })} */}
      <h4>Brand Name</h4>
      <p>{data.brand_name}</p>
    </div>
  )
}

export default Medicinedetails
