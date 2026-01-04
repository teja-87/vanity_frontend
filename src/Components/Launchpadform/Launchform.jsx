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
                        <input id="name" placeholder="enter the coin name" />
                    </div>
                    <div className="tickername">
                        <label for="ticker"> Ticker                 
                        </label>
                        <input placeholder="enter the ticker name" id="ticker" />
                    </div>

                   
                    
                    </div>
                    <div className="textdiv">
                            <label className="labeldesc" for="textarea"> Description </label>     
                            <textarea id="textarea" placeholder="describe about your coin here"></textarea>   

                    </div>
                   

               </div>
                
                    
           <div>
             <label>Upload Image</label>
           </div>
           
            <Imagedrag/>

            
            </div>
           
          

        </div>
        
    )


}

export default Launchform;