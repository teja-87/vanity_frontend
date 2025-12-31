import React,{useState,useEffect,useRef} from "react";

const Imagedrag =()=>{


    const inputRef = useRef("null");
    const [isDrag, setisDrag] = useState(true);
    const [isFile,setisFile] = useState(true);
    const handleInput=()=>{

    };
    
    return(


        <div className="inputimage" 
        onClick={()=>inputRef.current.click()}>
            <p id="pimg">Click Here or Drag and Drop Image Here</p>
            <input ref={inputRef} accept=".jpeg,.webp,.png,.img" type="file" hidden />
        </div>

    )
}



export default Imagedrag;