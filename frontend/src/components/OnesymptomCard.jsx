import React from 'react'

const OnesymptomCard = ({ text, title }) => {
  return (
  
    <div style={{
      backgroundColor:"#181818",
      color: "#3db166",
      border:'1px solid #3db166',
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      fontSize: "12.5px",
      width:"20vw",
      height:"15vh",
      display: "flex",
      flexDirection:"column",
      alignItems:'center',
      justifyContent:'center',
      fontFamily: "popins",
      fontWeight: "300",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
      
    }}>
      <h2>{title}</h2>

      <p style={{ color: 'white',fontSize:'18px' ,marginTop:'1vh'}}>{text}</p>

  </div>
  )
}

export default OnesymptomCard
