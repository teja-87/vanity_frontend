import React, { useState, useEffect } from 'react'
import "./Maincontent.css"
import PayButton from '../PayButton'
import hallogpt from "../../assets/hallogpt.png"
import GenerateButton from '../GenerateButton'



const Maincontent = () => {

  const [privacy,setPrivacy] = useState("false");
  const [word,setWord] = useState("");
  const [publickeygen,setPublickeygen]=useState("");
  const [privatekeygen,setPrivatekeygen]=useState("");
  const [copied,setCopied]=useState(false);
 

const copybut=()=>{

  navigator.clipboard.writeText(privatekeygen.join(","));
  setCopied(true);
  setTimeout(()=>setCopied(false),2000);

}
  
  return (
    <div className='whole'  >
        <div className='mainc'>
            <div className='tex'>
                <h1>Generate your VANITY ADDRESS</h1>
            </div>
           
              
           <div className='allinputs'>
             <div className='inbut'>
                <input className='inn' value={word} onChange={(e)=>setWord(e.target.value)} placeholder='Enter Your Word here'/>
                <div className='bs'>
                  <GenerateButton
                    word={word}
                    onGenerate={(data)=>{
                      setPublickeygen(data.publickey),
                      setPrivatekeygen(data.privatekey)

                    }}
                   
                    
                  ></GenerateButton>
                  <PayButton 
                    
                  ></PayButton>             
                </div>
            </div>

            {privatekeygen&&<div className='outbut'>
            
              <textarea type='password' className='publickey' value={publickeygen} readOnly> </textarea>
              <textarea className='privatekey' value={privatekeygen} readOnly> </textarea>
              <button onClick={copybut}>{copied? "🔒 Copied!" : "Copy Private Key"}</button>

            </div>
}
           </div>
            
           
        </div>
    </div>
  )
}

export default Maincontent