import React from "react";
import "./Launchform.css";


const Launchform=()=>{

    return (
       
        <div>
            <div>

                <label class="switch">
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

            <div>
                <input accept=".jpeg,.webp,.png,.img" type="file" />
            </div>

        </div>
        
    )


}

export default Launchform;