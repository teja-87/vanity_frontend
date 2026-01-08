import React, { useEffect } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Launchform from '../../Components/Launchpadform/Launchform';

const Launchpad=()=>{

    useEffect(()=>
    document.body.style.backgroundColor='white'
      
    

        );
return(
<>
    <Navbar/>
    <Launchform/>
</>
    

)
}

export default Launchpad;