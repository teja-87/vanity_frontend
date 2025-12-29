import React from "react";
import "./Launchform.css";
import Imagedrag from "../Imagedrag/Imagedrag";


const Launchform=()=>{

    return (
       
        <div>
            <div>

                <label className="switch">
                        <input type="checkbox" role="switch" />
                        <span class="slider"></span>
                </label>

                <label>Coin Name:
                    <input placeholder="enter the coin name" />
                </label>

                <label> Ticker:
                    <input placeholder="enter the ticker name" />
                </label>
                <label> Description:

                    <textarea >

                    </textarea>

                </label>         
           
            </div>
            <Imagedrag/>
          

        </div>
        
    )


}

export default Launchform;