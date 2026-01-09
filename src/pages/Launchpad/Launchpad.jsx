import React, { useEffect } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Launchform from '../../Components/Launchpadform/Launchform';

const Launchpad=()=>{

//     useEffect(()=>{
//     document.body.style.backgroundColor='white';
//     return()=>{
//         document.body.style.background='linear-gradient(35deg, #1861ff, #b34700)';
//     };
      
    

//  } ,[]);
return(
<>
    <Navbar/>
    <Launchform/>
</>
    

)
}

export default Launchpad;