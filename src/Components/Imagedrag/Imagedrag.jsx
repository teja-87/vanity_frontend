import React,{useState,useEffect,useRef} from "react";
import "./Imagedrag.css"

const Imagedrag =()=>{


    const inputRef = useRef(null);
    const [isDrag, setisDrag] = useState(false);
    const [file,setfile] = useState(null);
    const [preview,setpreview]=useState(null);

    const handleFile=(file)=>{
        if(!file) {
            console.log("please select a file");
            return};
             if (!file.type.startsWith("image/")) {
    alert("Only image files are allowed");
    return;
  }
        setfile(file);
        console.log(file)

    };

    useEffect(()=>{
        if(!file) return;
        const objUrl=URL.createObjectURL(file);
        setpreview(objUrl);
        return()=>{
            if (preview)URL.revokeObjectURL(objUrl)
        }
    },[file])
    
    return(

        
        <div className="inputimage" 
        onClick={()=>inputRef.current.click()}
        onDragOver={(e)=>{
            e.preventDefault();
            setisDrag(true);           
        }}
        onDragLeave={()=>setisDrag(false)}
        onDrop={(e)=>{
            e.preventDefault();
            setisDrag(false);
            handleFile(e.dataTransfer.files[0]);           
            
        }}
        >
            {preview? (<img src={preview} alt="preview" 
            style={{ width: "50%", height: "50%", objectFit: "contain" }} />):
        
            <p id="pimg" style={{fontSize:"20px"}}> Click Here to upload a image or Drag and Drop Image Here</p>}
            <input ref={inputRef} accept=".jpeg,.webp,.png" type="file" hidden 
            onChange={(e)=>{handleFile(e.target.files[0]);
            
                
            }}/>
        </div>

    )
}



export default Imagedrag;