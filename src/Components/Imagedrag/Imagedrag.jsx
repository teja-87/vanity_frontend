import React,{useState,useEffect,useRef} from "react";

const Imagedrag =()=>{
    return(

          <div className="inputimage">
                <p id="pimg">Click Here or Drag and Drop Image Here</p>
                <input accept=".jpeg,.webp,.png,.img" type="file" hidden />
            </div>

    )
}

export default Imagedrag;