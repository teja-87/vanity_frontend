import React from "react";
import "./Launchform.css";
import Imagedrag from "../Imagedrag/Imagedrag";


const Launchform=()=>{

    return (
       
        <div className="page">
            <div className="launchform">

               <div className="formcon">

                <div className="nameandticker">
                    <div className="coinname">
                        <label for="name">Coin Name
                        
                        </label>
                        <input id="name" placeholder="enter your coin name" />
                    </div>
                    <div className="tickername">
                        <label for="ticker"> Ticker                 
                        </label>
                        <input placeholder="enter your ticker name (eg:PEPE) " id="ticker" />
                    </div>

                   
                    
                </div>
                    <div className="textdiv">
                            <label className="labeldesc" for="textarea"> Description (Optional) </label>     
                            <textarea id="textarea" placeholder="describe about your coin here"></textarea>   

                    </div>
                   

               </div>
                
                    
           <div>
             <label>Upload Image</label>
           </div>
           
            <Imagedrag/>

            <div className="socials">
                              
                <div className="webx">
                    <div className="web">
                        <label for="website">Add Website</label>
                        <input id="website" placeholder="ADD URL"/>
                    </div>
                    <div className="x">
                        <label for="ex">Add X</label>
                        <input id="ex" placeholder="ADD URL"/>
                    </div>
                </div>
                <div className="telegram">
                    <label for='tele' >Add Telegram</label>
                    <input id="tele"placeholder="ADD URL"/>
                </div>
                
            </div>

            <div className="butt">
                <button>Create coin</button>
            </div>
            </div>
           
          

        </div>
        
    )


}

export default Launchform;