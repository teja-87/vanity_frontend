import React from 'react'
import "./Maincontent.css"

const Maincontent = () => {
  return (
    <div className='whole'>
        <div className='mainc'>
            <div className='tex'>
                <h1>Generate your VANITY ADDRESS</h1>
            </div>
            <div className='inbut'>
                <input placeholder='Enter Your Word here' maxLength={4}/>
                <button>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default Maincontent