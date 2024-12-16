import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
<div>
<ThreeDots
        visible={true}
        height="100"
        width="100"
        color="rgb(7, 25, 82)"
        radius="20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          background: "rgba(0, 0, 0, 0.6)", /* Add a semi-transparent background */
          padding: "20px",
          borderRadius: "8px",
          width:"100vw",
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
        />
</div>
  )
}

export default Loader
