import React from 'react'
import { BiX } from "react-icons/bi";
import './Feedback.css'
import { useState, useEffect } from 'react'

function Feedback() {
    const [Rendered, setIsRendered] = useState(false);
    useEffect(()=>{
        setIsRendered(true);
    },[])
    return (
        <>
        {Rendered &&( <div className='feedbackcard'>
            {console.log(Rendered)};
            <BiX className='Crosscomponent' onClick={() => setIsRendered(false)}/>
            <p>How we Imporve us...</p>
            <textarea type="text" className="feedbacktext" placeholder='Feedback Please...' required />
            <button className="submit" type='submit' onClick={() => setIsRendered(false)}>Submit</button>
        </div>
    )}
    </>
    )
}

export default Feedback
