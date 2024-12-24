import React from 'react'

const OnesymptomCard = ({ text, title }) => {
  return (
  
    <div style={{
      backgroundColor:"#181818",
      color: "#3db162",
      border:'1px none',
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      fontSize: "16px",
      width:"15vw",
      height:"15vh",
      display: "flex",
      flexDirection:"column",
      alignItems:'center',
      justifyContent:'center',
      fontFamily: "popins",
      fontWeight: "300",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
      
    }}>
      <h1>{title}</h1>
      {text}
  </div>
  )
}

export default OnesymptomCard
