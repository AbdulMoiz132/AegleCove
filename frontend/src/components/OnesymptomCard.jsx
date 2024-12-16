import React from 'react'

const OnesymptomCard = ({ text, title }) => {
  return (
  
    <div style={{
      backgroundColor:"#191c24",
      color: "white",
      border:'1px none',
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      fontSize: "18px",
      width:"15vw",
      height:"15vh",
      display: "flex",
      flexDirection:"column",
      alignItems:'center',
      fontStyle:"oblique",
      fontWeight: "Normal",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
      
    }}>
      <h1>{title}</h1>
      {text}
  </div>
  )
}

export default OnesymptomCard
